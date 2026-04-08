import React from 'react';
import heroBooks from "../../assets/pngwing 1.png";

const Hero = () => {
    return (
        <section className="w-10/12 mx-auto my-6">
            <div className="hero bg-green-50 rounded-3xl py-8 px-6 md:px-10">
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse gap-10">
                    <div>
                        <img
                            src={heroBooks}
                            alt="Books"
                            className="max-w-[220px] md:max-w-[260px] rounded-lg shadow-lg"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold leading-snug">
                            Books to freshen up <br /> your bookshelf
                        </h1>

                        <button className="btn mt-5 bg-green-500 text-white border-none hover:bg-green-600">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;