import Axios from "axios";

///////////////   EMPLOYEES   ///////////////

//Add a new employee
const addEmployee = (
  name,
  age,
  country,
  position,
  wage,
  managerID,
  setEmployeeList,
  employeeList
) => {
  // https://employeedatabasesql.herokuapp.com

  Axios.post("/create", {
    name: name,
    age: age,
    country: country,
    position: position,
    wage: wage,
    manager: managerID,
  })
    .then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
          manager: managerID,
        },
      ]);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

//Get all employees unordered
const getEmployees = (setEmployeeList) => {
  Axios.get("/employees").then((response) => {
    setEmployeeList(response.data);
  });
};

//Get all employees ordered by name ASC
const getEmployeesName = (setEmployeeList) => {
  Axios.get("/employeesName").then((response) => {
    setEmployeeList(response.data);
  });
};

//Get all employees ordered by name DESC
const getEmployeesNameDesc = (setEmployeeList) => {
  Axios.get("/employeesNameDesc").then((response) => {
    setEmployeeList(response.data);
  });
};

//Get all employees ordered by age ASC
const getEmployeesAge = (setEmployeeList) => {
  Axios.get("/employeesAge").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by age DESC
const getEmployeesAgeDesc = (setEmployeeList) => {
  Axios.get("/employeesAgeDesc").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by country ASC
const getEmployeesCountry = (setEmployeeList) => {
  Axios.get("/employeesCountry").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by country DESC
const getEmployeesCountryDesc = (setEmployeeList) => {
  Axios.get("/employeesCountryDesc").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by position ASC
const getEmployeesPosition = (setEmployeeList) => {
  Axios.get("/employeesPosition").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by position DESC
const getEmployeesPositionDesc = (setEmployeeList) => {
  Axios.get("/employeesPositionDesc").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by wage ASC
const getEmployeesWage = (setEmployeeList) => {
  Axios.get("/employeesWage").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get all employees ordered by wage DESC
const getEmployeesWageDesc = (setEmployeeList) => {
  Axios.get("/employeesWageDesc").then((response) => {
    setEmployeeList(response.data);
  });
};
//Get employees by searching a name
const getName = (name, setEmployeeList) => {
  Axios.get(`/name/${name}`).then((response) => {
    setEmployeeList(response.data);
  });
};
//Get employees by searching an age
const getAge = (age, setEmployeeList) => {
  Axios.get(`/age/${age}`).then((response) => {
    setEmployeeList(response.data);
  });
};
//Get employees by searching a country
const getCountry = (country, setEmployeeList) => {
  Axios.get(`/country/${country}`).then((response) => {
    setEmployeeList(response.data);
  });
};
//Get employees by searching a position
const getPosition = (position, setEmployeeList) => {
  Axios.get(`/position/${position}`).then((response) => {
    setEmployeeList(response.data);
  });
};
//Get employees by searching a wage
const getWage = (wage, setEmployeeList) => {
  Axios.get(`/wage/${wage}`).then((response) => {
    setEmployeeList(response.data);
  });
};
//Update an employees name
const updateEmployeeName = (id, newName, setEmployeeList, employeeList) => {
  Axios.put("/updateName", {
    name: newName,
    id: id,
  }).then((response) => {
    setEmployeeList(
      employeeList.map((val) => {
        return val.id == id
          ? {
              id: val.id,
              name: newName,
              country: val.country,
              age: val.age,
              position: val.position,
              wage: val.wage,
            }
          : val;
      })
    );
  });
};
//Update an employees age
const updateEmployeeAge = (id, newAge, setEmployeeList, employeeList) => {
  Axios.put("/updateAge", {
    age: newAge,
    id: id,
  }).then((response) => {
    setEmployeeList(
      employeeList.map((val) => {
        return val.id == id
          ? {
              id: val.id,
              name: val.name,
              country: val.country,
              age: newAge,
              position: val.position,
              wage: val.wage,
            }
          : val;
      })
    );
  });
};
//Update an employees country
const updateEmployeeCountry = (
  id,
  newCountry,
  setEmployeeList,
  employeeList
) => {
  Axios.put("/updateCountry", {
    country: newCountry,
    id: id,
  }).then((response) => {
    setEmployeeList(
      employeeList.map((val) => {
        return val.id == id
          ? {
              id: val.id,
              name: val.name,
              country: newCountry,
              age: val.age,
              position: val.position,
              wage: val.wage,
            }
          : val;
      })
    );
  });
};
//Update an employees position
const updateEmployeePosition = (
  id,
  newPosition,
  setEmployeeList,
  employeeList
) => {
  Axios.put("/updatePosition", {
    position: newPosition,
    id: id,
  }).then((response) => {
    setEmployeeList(
      employeeList.map((val) => {
        return val.id == id
          ? {
              id: val.id,
              name: val.name,
              country: val.country,
              age: val.age,
              position: newPosition,
              wage: val.wage,
            }
          : val;
      })
    );
  });
};
//Update an employees wage
const updateEmployeeWage = (id, newWage, setEmployeeList, employeeList) => {
  Axios.put("/updateWage", {
    wage: newWage,
    id: id,
  }).then((response) => {
    setEmployeeList(
      employeeList.map((val) => {
        return val.id == id
          ? {
              id: val.id,
              name: val.name,
              country: val.country,
              age: val.age,
              position: val.position,
              wage: newWage,
            }
          : val;
      })
    );
  });
};
//Update an employees supervisor
const updateEmployeeSupervisor = (
  id,
  newManager,
  setEmployeeList,
  employeeList
) => {
  Axios.put("/updateSupervisor", {
    wage: newManager,
    id: id,
  }).then((response) => {
    setEmployeeList(
      employeeList.map((val) => {
        return val.id == id
          ? {
              id: val.id,
              name: val.name,
              country: val.country,
              age: val.age,
              position: val.position,
              wage: val.wage,
              manager: newManager,
            }
          : val;
      })
    );
  });
};
//Delete an employee
const deleteEmployee = (id, setEmployeeList, employeeList) => {
  Axios.delete(`/delete/${id}`).then((response) => {
    setEmployeeList(
      employeeList.filter((val) => {
        return val.id != id;
      })
    );
  });
};

//////////////    MANAGERS   //////////////////

//Add a new manager
const addManager = (
  firstName,
  lastName,
  empID,
  setManagerList,
  managerList,
  title
) => {
  Axios.post("/createManager", {
    first_name: firstName,
    last_name: lastName,
    emp_id: empID,
    title: title,
  })
    .then(() => {
      setManagerList([
        ...managerList,
        {
          first_name: firstName,
          last_name: lastName,
          emp_id: empID,
          title: title,
        },
      ]);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

//Get all managers unordered
const getManagers = (setManagerList) => {
  Axios.get("/managers").then((response) => {
    setManagerList(response.data);
  });
};

//Get all managers ordered by first_name ASC
const getManagerFirstName = (setManagerList) => {
  Axios.get("/managerFirstName").then((response) => {
    setManagerList(response.data);
  });
};
//Get all managers ordered by first_name DESC
const getManagerFirstNameDesc = (setManagerList) => {
  Axios.get("/managerFirstNameDesc").then((response) => {
    setManagerList(response.data);
  });
};

//Get all managers ordered by last_name
const getManagerLastName = (setManagerList) => {
  Axios.get("/managerLastName").then((response) => {
    setManagerList(response.data);
  });
};
//Get all managers ordered by last_name DESC
const getManagerLastNameDesc = (setManagerList) => {
  Axios.get("/managerLastNameDesc").then((response) => {
    setManagerList(response.data);
  });
};

//Get all managers ordered by emp_id ASC
const getManagersEmpID = (setManagerList) => {
  Axios.get("/managersID").then((response) => {
    setManagerList(response.data);
  });
};
//Get all managers ordered by emp_id DESC
const getManagersEmpIDDesc = (setManagerList) => {
  Axios.get("/managersIDDesc").then((response) => {
    setManagerList(response.data);
  });
};
//Get all managers ordered by title ASC
const getManagersTitle = (setManagerList) => {
  Axios.get("/managersTitle").then((response) => {
    setManagerList(response.data);
  });
};
//Get all managers ordered by title DESC
const getManagersTitleDesc = (setManagerList) => {
  Axios.get("/managersTitleDesc").then((response) => {
    setManagerList(response.data);
  });
};
//Get managers by searching a first name
const getFirstName = (firstName, setManagerList) => {
  Axios.get(`/firstName/${firstName}`).then((response) => {
    setManagerList(response.data);
  });
};
//Get managers by searching last name
const getLastName = (lastName, setManagerList) => {
  Axios.get(`/lastName/${lastName}`).then((response) => {
    setManagerList(response.data);
  });
};
//Get employees by searching a ID
const getID = (id, setManagerList) => {
  Axios.get(`/id/${id}`).then((response) => {
    setManagerList(response.data);
  });
};
//Get manager by searching a title
const getTitle = (title, setManagerList) => {
  Axios.get(`/title/${title}`).then((response) => {
    setManagerList(response.data);
  });
};
//Update a manager first name
const updateManagerFirstName = (
  manager_id,
  newFirstName,
  setManagerList,
  managerList
) => {
  Axios.put("/updateManagerFirstName", {
    first_name: newFirstName,
    manager_id: manager_id,
  }).then((response) => {
    setManagerList(
      managerList.map((val) => {
        return val.manager_id == manager_id
          ? {
              manager_id: val.manager_id,
              first_name: newFirstName,
              last_name: val.last_name,
              emp_id: val.emp_id,
              title: val.title,
            }
          : val;
      })
    );
  });
};
// Update manager last name
const updateManagerLastName = (
  manager_id,
  newLastName,
  setManagerList,
  managerList
) => {
  Axios.put("/updateManagerLastName", {
    last_name: newLastName,
    manager_id: manager_id,
  }).then((response) => {
    setManagerList(
      managerList.map((val) => {
        return val.manager_id == manager_id
          ? {
              manager_id: val.manager_id,
              first_name: val.first_name,
              last_name: newLastName,
              emp_id: val.emp_id,
              title: val.title,
            }
          : val;
      })
    );
  });
};
const updateManagerTitle = (
  manager_id,
  newTitle,
  setManagerList,
  managerList
) => {
  Axios.put("/updateManagerTitle", {
    title: newTitle,
    manager_id: manager_id,
  }).then((response) => {
    setManagerList(
      managerList.map((val) => {
        return val.manager_id == manager_id
          ? {
              manager_id: val.manager_id,
              first_name: val.first_name,
              last_name: val.last_name,
              emp_id: val.emp_id,
              title: newTitle,
            }
          : val;
      })
    );
  });
};

// Delete a manager
const deleteManager = (id, setManagerList, managerList) => {
  Axios.delete(`/deleteManager/${id}`).then((response) => {
    setManagerList(
      managerList.filter((val) => {
        return val.id != id;
      })
    );
  });
};

const AxiosRoutes = {
  addEmployee,
  getEmployees,
  getEmployeesName,
  getEmployeesNameDesc,
  getEmployeesAge,
  getEmployeesAgeDesc,
  getEmployeesCountry,
  getEmployeesCountryDesc,
  getEmployeesPosition,
  getEmployeesPositionDesc,
  getEmployeesWage,
  getEmployeesWageDesc,
  getName,
  getAge,
  getCountry,
  getPosition,
  getWage,
  updateEmployeeName,
  updateEmployeeAge,
  updateEmployeeCountry,
  updateEmployeePosition,
  updateEmployeeWage,
  updateEmployeeSupervisor,
  deleteEmployee,
  addManager,
  getManagers,
  getManagerFirstName,
  getManagerFirstNameDesc,
  getManagerLastName,
  getManagerLastNameDesc,
  getManagersEmpID,
  getManagersEmpIDDesc,
  getManagersTitle,
  getManagersTitleDesc,
  getFirstName,
  getLastName,
  getID,
  getTitle,
  updateManagerTitle,
  updateManagerFirstName,
  updateManagerLastName,
  deleteManager,
};
export default AxiosRoutes;
