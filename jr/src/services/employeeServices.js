import axios from "axios";

const ID_EMPLOYEE = "http://localhost:8080/empleados";

class employeesServices{

    getAllEmployees(id){
        return axios.get(ID_EMPLOYEE + "/page/" + id);
    }

    getEmployee(x){
        return axios.get(ID_EMPLOYEE + "/" + x)
    }

    editEmployee(updateEmployee, id){
        return axios.put(ID_EMPLOYEE + "/" + id, updateEmployee)
    }

    deleteEmployee(id){
        return axios.delete(ID_EMPLOYEE + "/" + id + "/delete")
    }

    newEmployee(newEmployee){
        return axios.post(ID_EMPLOYEE + "/" + "new", newEmployee)
    }
}

export default new employeesServices;
