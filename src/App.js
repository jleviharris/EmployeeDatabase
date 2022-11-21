import "./App.css";
import { useState } from "react";
import AxiosRoutes from "./Routes/AxiosRoutes";

function App() {
  //////   MANAGERS USESTATES   //////
  //First Name
  const [firstName, setFirstName] = useState("");
  const [firstNameOn, setFirstNameOn] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  //Last Name
  const [lastName, setLastName] = useState("");
  const [lastNameOn, setLastNameOn] = useState(false);
  const [newLastName, setNewLastName] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  //EMP_ID
  const [empID, setEmpID] = useState(0);
  const [IDOn, setIDOn] = useState(false);
  const [IDInput, setIDInput] = useState(0);
  //TITLE
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [titleOn, setTitleOn] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  //Manager List
  const [managerList, setManagerList] = useState([]);
  //Show Managers
  const [managersOn, setManagersOn] = useState(false);
  const [managerSearchOn, setManagerSearchOn] = useState(false);
  //Show Add managers section
  const [managerAddOn, setManagerAddOn] = useState(false);

  //////  EMPLOYEE USESTATES  ///////
  //Name
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [nameOn, setNameOn] = useState(false);
  const [newName, setNewName] = useState("");
  //Age
  const [age, setAge] = useState(0);
  const [ageInput, setAgeInput] = useState(0);
  const [ageOn, setAgeOn] = useState(false);
  const [newAge, setNewAge] = useState(0);
  //Country
  const [country, setCountry] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [countryOn, setCountryOn] = useState(false);
  const [newCountry, setNewCountry] = useState("");
  //Position
  const [position, setPosition] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [positionOn, setPositionOn] = useState(false);
  const [newPosition, setNewPosition] = useState("");
  //Wage
  const [wage, setWage] = useState(0);
  const [wageInput, setWageInput] = useState(0);
  const [wageOn, setWageOn] = useState(false);
  const [newWage, setNewWage] = useState(0);
  //ManagerID
  const [managerID, setManagerID] = useState(0);
  const [newManager, setNewManager] = useState(0);
  //Employee List
  const [employeeList, setEmployeeList] = useState([]);
  //Show Employees
  const [employeesOn, setEmployeesOn] = useState(false);
  const [employeeSearchOn, setEmployeeSearchOn] = useState(false);
  //Show Add employee section
  const [employeeAddOn, setEmployeeAddOn] = useState(false);

  //Delete Bttn
  const [hiddenBttn, setHiddenBttn] = useState(false);

  //Open the hidden delete button
  const openDelete = () => {
    if (hiddenBttn) {
      setHiddenBttn(false);
    } else if (!hiddenBttn) {
      setHiddenBttn(true);
    }
  };

  return (
    <div className="App">
      <div className="addSection">
        <h1>Employee Database</h1>
        <div>Add New</div>
        <button
          onClick={() => {
            setManagerAddOn(false);
            setEmployeeAddOn(true);
          }}
        >
          Employee
        </button>
        <button
          onClick={() => {
            setManagerAddOn(true);
            setEmployeeAddOn(false);
          }}
        >
          Manager
        </button>
        <div>
          {/* ////////   ADDING A NEW EMPLOYEE   /////// */}
          {employeeAddOn && (
            <div className="inputs">
              <label>Name:</label>
              <input
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <label>Age:</label>
              <input
                type="number"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
              <label>Country:</label>
              <input
                type="text"
                onChange={(event) => {
                  setCountry(event.target.value);
                }}
              />
              <label>Position:</label>
              <input
                type="text"
                onChange={(event) => {
                  setPosition(event.target.value);
                }}
              />
              <label>Wage per hr:</label>
              <input
                type="number"
                onChange={(event) => {
                  setWage(event.target.value);
                }}
              />
              <label>Supervisor:</label>
              <input
                type="number"
                onChange={(event) => {
                  setManagerID(event.target.value);
                }}
              />
              <button
                className="infoBttn"
                onClick={() => {
                  AxiosRoutes.addEmployee(
                    name,
                    age,
                    country,
                    position,
                    wage,
                    managerID,
                    setEmployeeList,
                    employeeList
                  );
                }}
              >
                Add Employee
              </button>
            </div>
          )}
          {/*    ////////  ADDING A NEW MANAGER  //////// */}
          {managerAddOn && (
            <div className="inputs">
              <label>First Name:</label>
              <input
                type="text"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <label>Last Name:</label>
              <input
                type="text"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <label>Title:</label>
              <input
                type="text"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
              <label>Employee ID:</label>
              <input
                type="number"
                onChange={(event) => {
                  setEmpID(event.target.value);
                }}
              />

              <button
                className="infoBttn"
                onClick={() => {
                  AxiosRoutes.addManager(
                    firstName,
                    lastName,
                    empID,
                    setManagerList,
                    managerList,
                    title
                  );
                }}
              >
                Add Manager
              </button>
            </div>
          )}
        </div>
      </div>
      {/* ////////    DISPLAY ALL EMPLOYEES BY FILTERS   ////////// */}
      <div className="employees">
        <div className="employeeHeader">
          <div>Display All Employees By: </div>

          <div className="employeeHeaderBttns">
            {" "}
            <div className="headerBttnGroup">
              {" "}
              <div>Name</div>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesName(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesNameDesc(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              {" "}
              <div className="headerBttnGroupTitle">Age</div>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesAge(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesAgeDesc(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              {" "}
              <div className="headerBttnGroupTitle">Country</div>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesCountry(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesCountryDesc(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              <div className="headerBttnGroupTitle">Position</div>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesPosition(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesPositionDesc(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              <div className="headerBttnGroupTitle">Wage</div>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesWage(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getEmployeesWageDesc(setEmployeeList);
                  setEmployeesOn(true);
                  setManagersOn(false);
                  setManagerSearchOn(false);
                  setEmployeeSearchOn(true);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ////////    DISPLAY ALL MANAGERS BY FILTERS   ////////// */}

        <div className="employeeHeader">
          <div>Display All Managers By: </div>

          <div className="employeeHeaderBttns">
            {" "}
            <div className="headerBttnGroup">
              {" "}
              <div>First Name</div>
              <button
                onClick={() => {
                  AxiosRoutes.getManagerFirstName(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getManagerFirstNameDesc(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              {" "}
              <div className="headerBttnGroupTitle">Last Name</div>
              <button
                onClick={() => {
                  AxiosRoutes.getManagerLastName(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getManagerLastNameDesc(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              {" "}
              <div className="headerBttnGroupTitle">Employee ID</div>
              <button
                onClick={() => {
                  AxiosRoutes.getManagersEmpID(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getManagersEmpIDDesc(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
            <div className="headerBttnGroup">
              {" "}
              <div className="headerBttnGroupTitle">Title</div>
              <button
                onClick={() => {
                  AxiosRoutes.getManagersTitle(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_down
                </span>
              </button>
              <button
                onClick={() => {
                  AxiosRoutes.getManagersTitleDesc(setManagerList);
                  setManagersOn(true);
                  setEmployeesOn(false);
                  setManagerSearchOn(true);
                  setEmployeeSearchOn(false);
                }}
              >
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*   /////////    SEARCH FOR SINGLE EMPLOYEE BY FILTER    ///////// */}
      {employeeSearchOn && (
        <div className="searchBy">
          Search by:
          <button
            onClick={() => {
              setNameOn(true);
              setAgeOn(false);
              setCountryOn(false);
              setPositionOn(false);
              setWageOn(false);
            }}
          >
            Name
          </button>
          <button
            onClick={() => {
              setNameOn(false);
              setAgeOn(true);
              setCountryOn(false);
              setPositionOn(false);
              setWageOn(false);
            }}
          >
            Age
          </button>
          <button
            onClick={() => {
              setNameOn(false);
              setAgeOn(false);
              setCountryOn(true);
              setPositionOn(false);
              setWageOn(false);
            }}
          >
            Country
          </button>
          <button
            onClick={() => {
              setNameOn(false);
              setAgeOn(false);
              setCountryOn(false);
              setPositionOn(true);
              setWageOn(false);
            }}
          >
            Position
          </button>
          <button
            onClick={() => {
              setNameOn(false);
              setAgeOn(false);
              setCountryOn(false);
              setPositionOn(false);
              setWageOn(true);
            }}
          >
            Wage
          </button>
        </div>
      )}

      {nameOn && employeeSearchOn && (
        <div className="searchBar">
          {" "}
          Name:{" "}
          <input
            type="text"
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getName(nameInput, setEmployeeList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {ageOn && employeeSearchOn && (
        <div className="searchBar">
          {" "}
          Age:{" "}
          <input
            type="number"
            onChange={(event) => {
              setAgeInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getAge(ageInput, setEmployeeList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {countryOn && employeeSearchOn && (
        <div className="searchBar">
          {" "}
          Country:{" "}
          <input
            type="text"
            onChange={(event) => {
              setCountryInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getCountry(countryInput, setEmployeeList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {positionOn && employeeSearchOn && (
        <div className="searchBar">
          {" "}
          Position:{" "}
          <input
            type="text"
            onChange={(event) => {
              setPositionInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getPosition(positionInput, setEmployeeList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {wageOn && employeeSearchOn && (
        <div className="searchBar">
          {" "}
          Wage:{" "}
          <input
            type="number"
            onChange={(event) => {
              setWageInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getWage(wageInput, setEmployeeList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {/*   /////////    SEARCH FOR SINGLE MANAGER BY FILTER    ///////// */}
      {managerSearchOn && (
        <div className="searchBy">
          Search by:
          <button
            onClick={() => {
              setFirstNameOn(true);
              setLastNameOn(false);
              setIDOn(false);
              setTitleOn(false);
              setManagerSearchOn(true);
              setEmployeeSearchOn(false);
            }}
          >
            First Name
          </button>
          <button
            onClick={() => {
              setFirstNameOn(false);
              setLastNameOn(true);
              setIDOn(false);
              setTitleOn(false);
              setManagerSearchOn(true);
              setEmployeeSearchOn(false);
            }}
          >
            Last Name
          </button>
          <button
            onClick={() => {
              setFirstNameOn(false);
              setLastNameOn(false);
              setIDOn(true);
              setTitleOn(false);
              setManagerSearchOn(true);
              setEmployeeSearchOn(false);
            }}
          >
            Employee ID
          </button>
          <button
            onClick={() => {
              setFirstNameOn(false);
              setLastNameOn(false);
              setIDOn(false);
              setTitleOn(true);
              setManagerSearchOn(true);
              setEmployeeSearchOn(false);
            }}
          >
            Title
          </button>
        </div>
      )}
      {firstNameOn && managerSearchOn && (
        <div className="searchBar">
          {" "}
          First Name:{" "}
          <input
            type="text"
            onChange={(event) => {
              setFirstNameInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getFirstName(firstNameInput, setManagerList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {lastNameOn && managerSearchOn && (
        <div className="searchBar">
          {" "}
          Last Name:{" "}
          <input
            type="text"
            onChange={(event) => {
              setLastNameInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getLastName(lastNameInput, setManagerList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {IDOn && managerSearchOn && (
        <div className="searchBar">
          {" "}
          Employee ID:{" "}
          <input
            type="text"
            onChange={(event) => {
              setIDInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getID(IDInput, setManagerList);
            }}
          >
            Search
          </button>
        </div>
      )}
      {titleOn && managerSearchOn && (
        <div className="searchBar">
          {" "}
          Title:{" "}
          <input
            type="text"
            onChange={(event) => {
              setTitleInput(event.target.value);
            }}
          />
          <button
            onClick={() => {
              AxiosRoutes.getTitle(titleInput, setManagerList);
            }}
          >
            Search
          </button>
        </div>
      )}

      {/* ///////////    MAPPING OUT EMPLOYEES TO THE PAGE   /////////// */}
      {employeesOn && (
        <div>
          {employeeList.map((val, index) => {
            return (
              <div className="employee">
                <div className="itemHolder">
                  <div className="item"> Employee ID:</div>
                  <div className="item"> {val.id}</div>
                </div>
                <div className="itemHolder">
                  <div className="item"> Name:</div>
                  <div className="item">
                    {" "}
                    {val.name}
                    <div className="newWageHolder">
                      <input
                        className="newInput"
                        type="text"
                        placeholder="new name"
                        onChange={(event) => {
                          setNewName(event.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          AxiosRoutes.updateEmployeeName(
                            val.id,
                            newName,
                            setEmployeeList,
                            employeeList
                          );
                        }}
                      >
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div className="itemHolder">
                  <div className="item">Age:</div>
                  <div className="item">
                    {val.age}
                    <div className="newWageHolder">
                      <input
                        className="newInput"
                        type="text"
                        placeholder="new age"
                        onChange={(event) => {
                          setNewAge(event.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          AxiosRoutes.updateEmployeeAge(
                            val.id,
                            newAge,
                            setEmployeeList,
                            employeeList
                          );
                        }}
                      >
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div className="itemHolder">
                  <div className="item">Country:</div>
                  <div className="item">{val.country}</div>
                  <div className="newWageHolder">
                    <input
                      className="newInput"
                      type="text"
                      placeholder="new country"
                      onChange={(event) => {
                        setNewCountry(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        AxiosRoutes.updateEmployeeCountry(
                          val.id,
                          newCountry,
                          setEmployeeList,
                          employeeList
                        );
                      }}
                    >
                      {" "}
                      Update
                    </button>
                  </div>{" "}
                </div>
                <div className="itemHolder">
                  {" "}
                  <div className="item">Position:</div>{" "}
                  <div className="item">{val.position}</div>
                  <div className="newWageHolder">
                    <input
                      className="newInput"
                      type="text"
                      placeholder="new position"
                      onChange={(event) => {
                        setNewPosition(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        AxiosRoutes.updateEmployeePosition(
                          val.id,
                          newPosition,
                          setEmployeeList,
                          employeeList
                        );
                      }}
                    >
                      {" "}
                      Update
                    </button>
                  </div>
                </div>
                <div className="itemHolder">
                  {" "}
                  <div className="item"> Wage:</div>{" "}
                  <div className="item"> ${val.wage}hr</div>
                  <div className="newWageHolder">
                    <input
                      className="newInput"
                      type="text"
                      placeholder="new wage"
                      onChange={(event) => {
                        setNewWage(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        AxiosRoutes.updateEmployeeWage(
                          val.id,
                          newWage,
                          setEmployeeList,
                          employeeList
                        );
                      }}
                    >
                      {" "}
                      Update
                    </button>
                  </div>
                </div>
                <div className="itemHolder">
                  {" "}
                  <div className="item"> Supervisor:</div>{" "}
                  <div className="item"> {val.manager}</div>
                  <div className="newWageHolder">
                    <input
                      className="newInput"
                      type="text"
                      placeholder="new supervisor"
                      onChange={(event) => {
                        setNewManager(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        AxiosRoutes.updateEmployeeSupervisor(
                          val.id,
                          newManager,
                          setEmployeeList,
                          employeeList
                        );
                      }}
                    >
                      {" "}
                      Update
                    </button>
                  </div>
                </div>
                <div className="deleteBttn">
                  {" "}
                  <button
                    key={val.id}
                    onClick={() => {
                      openDelete();
                    }}
                  >
                    Delete Employee
                  </button>
                  {hiddenBttn && (
                    <div>
                      Are you sure?
                      <button
                        onClick={() => {
                          AxiosRoutes.deleteEmployee(
                            val.id,
                            setEmployeeList,
                            employeeList
                          );
                        }}
                      >
                        yes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ///////////    MAPPING OUT MANAGERS TO THE PAGE   /////////// */}
      {managersOn && (
        <div>
          {managerList.map((val, index) => {
            return (
              <div className="employee">
                <div className="itemHolder">
                  <div className="item"> ID:</div>
                  <div className="item"> {val.manager_id}</div>
                </div>
                <div className="itemHolder">
                  <div className="item"> First name:</div>
                  <div className="item">
                    {" "}
                    {val.first_name}
                    <div className="newWageHolder">
                      <input
                        className="newInput"
                        type="text"
                        placeholder="new first name"
                        onChange={(event) => {
                          setNewFirstName(event.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          AxiosRoutes.updateManagerFirstName(
                            val.manager_id,
                            newFirstName,
                            setManagerList,
                            managerList
                          );
                        }}
                      >
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div className="itemHolder">
                  <div className="item">Last name:</div>
                  <div className="item">
                    {val.last_name}
                    <div className="newWageHolder">
                      <input
                        className="newInput"
                        type="text"
                        placeholder="new last name"
                        onChange={(event) => {
                          setNewLastName(event.target.value);
                        }}
                      />
                      <button
                        onClick={() => {
                          AxiosRoutes.updateManagerLastName(
                            val.manager_id,
                            newLastName,
                            setManagerList,
                            managerList
                          );
                        }}
                      >
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>

                <div className="itemHolder">
                  <div className="item">Title:</div>
                  <div className="item">{val.title}</div>
                  <div className="newWageHolder">
                    <input
                      className="newInput"
                      type="text"
                      placeholder="new title"
                      onChange={(event) => {
                        setNewTitle(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        AxiosRoutes.updateManagerTitle(
                          val.manager_id,
                          newTitle,
                          setManagerList,
                          managerList
                        );
                      }}
                    >
                      {" "}
                      Update
                    </button>
                  </div>{" "}
                </div>
                <div className="itemHolder">
                  <div className="item">Employee ID:</div>
                  <div className="item">{val.emp_id}</div>
                </div>

                <div className="deleteBttn">
                  {" "}
                  <button
                    key={val.manager_id}
                    onClick={() => {
                      openDelete();
                    }}
                  >
                    Delete Manager
                  </button>
                  {hiddenBttn && (
                    <div>
                      Are you sure?
                      <button
                        onClick={() => {
                          AxiosRoutes.deleteManager(
                            val.manager_id,
                            setManagerList,
                            managerList
                          );
                        }}
                      >
                        yes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
