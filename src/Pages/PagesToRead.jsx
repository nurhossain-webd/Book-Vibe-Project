import React, { useContext } from 'react';
import { BookContext } from '../context/BookProvider';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
    LabelList,
} from 'recharts';

const colors = ['#1d8cf8', '#14c7a5', '#f6b71e', '#ff7a2f', '#ff1e1e'];

const getPath = (x, y, width, height) => {
    return `
        M${x},${y + height}
        C${x + width * 0.15},${y + height * 0.55}
         ${x + width * 0.35},${y + height * 0.15}
         ${x + width / 2},${y}
        C${x + width * 0.65},${y + height * 0.15}
         ${x + width * 0.85},${y + height * 0.55}
         ${x + width},${y + height}
        Z
    `;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const { storeBooks } = useContext(BookContext);

    const chartData = storeBooks.map((book) => ({
        name:
            book.bookName.length > 18
                ? book.bookName.slice(0, 18) + '...'
                : book.bookName,
        pages: book.totalPages,
    }));

    if (storeBooks.length === 0) {
        return (
            <div className="w-11/12 mx-auto my-12">
                <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-800">No books to display</h2>
                    <p className="mt-2 text-gray-500">
                        Add books to your read list first to see the chart here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto my-8">
            <div className="bg-[#f3f3f3] rounded-3xl p-6 md:p-10">
                <div className="bg-[#efefef] rounded-3xl p-4 md:p-8 w-full h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                            margin={{ top: 30, right: 30, left: 10, bottom: 40 }}
                            barCategoryGap={35}
                        >
                            <CartesianGrid strokeDasharray="4 4" stroke="#d6d6d6" />
                            <XAxis
                                dataKey="name"
                                interval={0}
                                tick={{ fontSize: 12, fill: '#8a8a8a' }}
                                axisLine={{ stroke: '#8a8a8a' }}
                                tickLine={{ stroke: '#8a8a8a' }}
                            />
                            <YAxis
                                tick={{ fontSize: 12, fill: '#8a8a8a' }}
                                axisLine={false}
                                tickLine={{ stroke: '#8a8a8a' }}
                            />
                            <Tooltip />
                            <Bar
                                dataKey="pages"
                                shape={<TriangleBar />}
                            >
                                <LabelList
                                    dataKey="pages"
                                    position="top"
                                    formatter={(value) => value}
                                    style={{ fontSize: 12, fontWeight: 700 }}
                                />
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colors[index % colors.length]}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default PagesToRead;