import { useEffect, useState } from "react";
import employeesServices from "../services/employeeServices";
import { Link, useParams, useLocation } from "react-router-dom";

const TH = ["First Name", "Last Name", "Country", "Manager", "Edit"];

export const ListEmployee = () => {

    const [employee, setEmployee] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    const [pagesNum, setPagesNum] = useState("");

    useEffect(() => {
        employeesServices.getAllEmployees(id).then(response => {
            setPagesNum(response.data.totalPages - 1);
            setEmployee(response.data);
            console.log(pagesNum);
        }).catch(error => {
            console.log(error);
        })
    }, [id])

    return (
        <div className="relative select-none w-full min-h-full flex justify-center">
            <img className="absolute bg-cover w-full min-h-full z-0" src={"/src/images/21.webp"} alt="background"></img>
            <div className="z-10 p-5">
                <h1 className="text-center text-white ml-4 text-4xl p-10">
                    <span className="rounded-3xl border border-white p-5">List of Employees</span>
                </h1>
                <table className="mx-auto mt-10 border">
                    <thead>
                        <tr className="rounded-3xl">
                            {TH.map((head, index) => (
                                <th key={index} className="px-20 text-white p-2">{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {Array.isArray(employee.content) && employee.content.map(employee =>
                            <tr key={employee.id}>
                                <td className="p-2 text-center">{employee.firstName}</td>
                                <td className="p-2 text-center">{employee.lastName}</td>
                                <td className="p-2 text-center">{employee.country}</td>
                                <td className="p-2 text-center">{employee.manager}</td>
                                <td className="px-20 py-2">
                                    <Link to={`/employee/${employee.id}`}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 h-10 px-4 rounded">Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex flex-row justify-center text-center mt-10">
                    {location.pathname !== "/employee/page/0" ? (
                        <Link to={`/employee/page/${id - 1}`}><button className="hover:text-white py-2 px-4">
                            <svg className="w-6 h-6 inline-block mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    ) : (
                        <div className="text-gray font-bold py-2 px-4 rounded">
                            <svg className="w-6 h-6 inline-block mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    )}
                    <Link to="/save">
                        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">New Employee</button>
                    </Link>
                    {id < pagesNum ? (
                        <Link to={`/employee/page/${parseInt(id) + 1}`}><button className="hover:text-white text-black font-bold py-2 px-4 rounded">
                            <svg className="w-6 h-6 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                        </Link>
                    ) : (
                        <div className="text-black font-bold py-2 px-4 rounded">
                            <svg className="w-6 h-6 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    )}
                </div>
                <div className="flex justify-center my-4">
                    <p>Page {parseInt(id) + 1} of {parseInt(pagesNum) + 1}</p>
                </div>
            </div>
        </div>
    )
}