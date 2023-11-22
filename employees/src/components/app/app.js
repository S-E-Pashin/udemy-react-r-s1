import React from 'react';

import {Component} from "react/index";
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {name: 'Тимофей', salary: 800, increase: false, id: 1},
        {name: 'Никита', salary: 3000, increase: true, id: 2},
        {name: 'Иван', salary: 54000, increase: false, id: 3},
      ]
    }
  }

  //метод
  deleteItem = (id) => {
    this.setState(({data}) => {
    //Интересный прием: метод массива принимающий коллбек функцию
    //   При котором если будет получено true то тогда результат =
    //     вернет номер элемента в массиве который true
      const index = data.findIndex(elem => elem.id === id);
      // console.log(index);
      //получаю сохр в новый массив массив с элементами до элемента с найденным id
      const before = data.slice(0, index);
      //получаю сохр в новый массив с эл после найденного эл
      const after = data.slice(index + 1);
      //создаю новый массив из 2х массивов (этот массив не включает найденный эл)
      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    })
    // console.log(id)
  }

  // let test = console.log(id);
  // let idCL = (id) => {
  //   console.log(`"text-айди"   ${id} `);
  // }

  render() {
    return (
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList data={this.state.data}
                       functionOnDelete = {this.deleteItem}
          // functionOnDelete = {id => idCL(id)}
        />
        <EmployeesAddForm/>
      </div>
    )
  }


}

export default App;
