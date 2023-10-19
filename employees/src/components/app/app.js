import React from 'react';
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


function App() {

  const data = [
    {name: 'Тимофей', salary: 800, increase: false},
    {name: 'Никита', salary: 3000, increase: true},
    {name: 'Иван', salary: 54000, increase: false},
    {name: 'Иван2', salary: 53000, increase: false},
    {name: 'Иван3', salary: 15000, increase: false},
  ];

  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  )
}

export default App;
