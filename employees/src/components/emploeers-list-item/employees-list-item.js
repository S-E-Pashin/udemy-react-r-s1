import React from "react";
import {Component} from "react/index";

import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      beLike: false,
    }
  }

  // onIncrease = () => {
  //   this.setState((state) => ({
  //     increase: !state.increase
  //   }))
  // }

  // Оба варианта верны.
  // В варианте ниже передаваемый потов
  // (В будущем state) сразу деструктуризируется
  // и в него передается значение из increase и
  // дальше в значение increase записывается
  // противоположное ему булево значение.

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }

  onLike = (e, clN) => {
    this.setState( ({beLike}) => ({
      beLike: !beLike
      })
    )
  }

  render() {
    const {name, salary, onDelete} = this.props;
    const {increase} = this.state;
    const {beLike} = this.state;
  // console.log(this);
    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }

    if (beLike) {
      classNames += ' like';
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={(e) => this.onLike(e, {classNames})}>{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>

        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
                  className="btn-cookie btn-sm "
          onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
                  className="btn-trash btn-sm "
                  onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem;
