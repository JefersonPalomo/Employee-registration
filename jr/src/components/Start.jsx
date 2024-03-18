export default function Start() {

    return (
        <>
            <div className="relative select-none w-full min-h-full flex justify-center">
                <img className="absolute w-full min-h-full z-0" src={"src/images/21.webp"}></img>
                <div className="z-10 p-5 grid lg:grid-cols-2 sm:grid-cols-1 flex justify-center items-center">
                    <div className="mx-5 my-5 h-auto inline-block rounded-3xl border">
                        <img className="rounded-t-lg w-60 h-70" src={"/src/images/1T.webp"} alt="" />
                        <div className="p-5 rounded-b-3xl w-60 h-70 bg-white">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Management T</h5>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Take a look at our team of managers. Our leaders and friends.</p>
                            <a href="/managers" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check out
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mx-5 my-5 inline-block rounded-3xl border">
                        <img className="rounded-t-lg w-60 h-70" src={"/src/images/2T.webp"} alt="" />
                        <div className="p-5 rounded-b-3xl w-60 h-70 bg-white">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Work T</h5>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Our members and companions in this company. Take a look.</p>
                            <a href="/employee/page/0" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check out
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
