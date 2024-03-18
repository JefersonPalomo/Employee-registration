import React from "react";
import { Link } from "react-router-dom";

export default function Cards() {
    return (
        <div className="min-h-full relative">
            <img className="absolute inset-0 bg-cover w-screen h-screen z-0" src={"src/images/21.webp"}/>
            <div className="relative flex justify-center mx-auto">
                <div>
                    <h1 className="xl:text-4xl p-4 text-3xl text-center text-white font-extrabold my-4">Team Manager</h1>
                </div>
            </div>
            <div className="relative w-full bg-gray-300 px-10 pt-10">
                <div className="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md py-8 bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 mb-5">
                                    <h1 className="font-bold text-3xl text-center mb-1">Karl PEP</h1>
                                    <p className="text-gray-800 text-sm text-center">Manager Development</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md py-8 bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 mb-5">
                                    <h1 className="font-bold text-3xl text-center mb-1">Silene Tokyo</h1>
                                    <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                </div>
                            </div>
                        </div>
                        <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md py-8 bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16 mb-5">
                                    <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                    <p className="text-gray-800 text-sm text-center">Manager Development</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center py-9">
                <Link to="/employee/page/0"><button className="bg-purple-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">Employees</button></Link>
            </div>
        </div>
    );
}