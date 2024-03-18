import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import employeesServices from "../services/employeeServices";

export default function EditAlertBox() {

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [countryError, setCountryError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [manager, setManager] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname === `/employee/${id}`) {
      const fetchEmployee = async () => {
        try {
          const response = await employeesServices.getEmployee(id);

          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setCountry(response.data.country);
          setManager(response.data.manager);

        } catch (error) {
          console.error("Error fetching employee:", error);
        }
      };
      fetchEmployee();
    } else {
        setFirstName(""),
        setLastName(""),
        setCountry(""),
        setManager("")
    }
  }, [id, location.pathname]);


  const validateInputs = () => {
    let valid = true;
    if (firstName.length < 2) {
      setFirstNameError(true);
      valid = false;
    } else {
      setFirstNameError(false);
    } if (lastName.length < 2) {
      setLastNameError(true);
      valid = false;
    } else {
      setLastNameError(false);
    } if (country.length < 2) {
      setCountryError(true);
      valid = false;
    } else {
      setCountryError(false);
    }
    return valid;
  };

  const deleteD = async (id) => {
    try {
      employeesServices.deleteEmployee(id)
        .then(() => {
          navigate("/employee/page/0");
        })

    } catch (error){
      console.log("Error al eliminar el registro", Error)
    }
  }

  const handleSave = async () => {
    try {
      const Employee = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        country: country,
        manager: manager,
      };
      if (location.pathname === `/employee/${id}`) {
        employeesServices.editEmployee(Employee, id)
          .then(() => {
            navigate("/employee/page/0");
          })
      } else if (location.pathname === `/save`) {
        Employee.manager = 1;
        employeesServices.newEmployee(Employee)
          .then(() => {
            navigate("/employee/page/0");
          })
      }
    } catch (error) {
      console.error("Error al guardar el registro:", Error);
    };
  };

  return (
    <>
      <div className="relative top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
        <img className="absolute inset-0 bg-cover w-screen h-screen z-0" src="../src/images/21.webp"></img>
        <div className="bg-white p-8 rounded shadow-lg z-10 m-10">
          <h2 className="text-lg font-semibold mb-4">{location.pathname === `/employee/${id}` ? ("Edit") : ("Save")}</h2>
          <div>
            <p className="text-1xl font-semibold">First Name:</p>
            <input
              type="text"
              className={`w-full border w-80 block border-gray-300 rounded px-3 py-2 mb-4 ${firstNameError && 'border-red-500'}`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && <p className="text-red-500 text-sm">The name must be at least 2 characters</p>}
            <p className="text-1xl font-semibold">Last Name:</p>
            <input
              type="text"
              className={`w-full border w-80 block border-gray-300 rounded px-3 py-2 mb-4 ${lastNameError && 'border-red-500'}`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && <p className="text-red-500 text-sm">Last name must be at least 2 characters</p>}
            <p className="text-1xl font-semibold">Country:</p>
            <input
              type="text"
              className={`w-full border w-80 block border-gray-300 rounded px-3 py-2 mb-4 ${countryError && 'border-red-500'}`}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            {countryError && <p className="text-red-500 text-sm">Country must be at least 2 characters</p>}
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={() => validateInputs() && handleSave()}>Save</button>
            {location.pathname === `/employee/${id}` && (
              <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mr-4" onClick={() => deleteD(id)}>Delete</button>
            )}
            <Link to="/employee/page/0"><button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
