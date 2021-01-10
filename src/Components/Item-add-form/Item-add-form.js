import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addTodoItem } from '../../actions/todo-items-actions'

import './Item-add-form.css';

// Мы не делаем post-запросов на бэкенд для создания todoItem в данном примере,
// поэтому создаем локальный todoItem со случайным id.
function createTodoItem(task) {
  return {
    id: uuidv4(),
    task,
    isCompleted: false
  }
}

class ItemAddForm extends Component {

    state = {
        task: ''
    };

    onItemAdded = (task) => this.props.addTodoItem(createTodoItem(task))

    
    onLabelChange = (e) => {
        this.setState({
          task: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.onItemAdded(this.state.task);  
        this.setState({
          task: ''
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>

        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="Что необходимо сделать, добавить в список"
               value={this.state.task} />
        <button
          className="btn btn-outline-secondary">
          Add Task
        </button>
      </form>
        );
    }
}

export default connect(null, { addTodoItem })(ItemAddForm);
