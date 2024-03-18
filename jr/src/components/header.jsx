import { Outlet } from "react-router-dom"

export const HeaderC = () => {

    return (
        <div className="select-none min-h-screen flex relative">
            <div className="w-64 bg-gray-200 p-6">
                <h1 className="text-black text-2xl font-serif hover:text-blue-900"><a href="/">Main Site</a></h1>
                <div className="mt-3 flex">
                    <svg className="flex-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <a href="/managers" class="flex-2 text-black hover:text-blue-700">Managers</a>
                </div>
                <div className="mt-3 flex">
                    <svg className="flex-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    <a href="/employee/page/0" class="flex-2 text-black hover:text-blue-700">Employees</a>
                </div>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    )
}

export default HeaderC