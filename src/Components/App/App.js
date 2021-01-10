import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AppATopHeader from '../App-a-top-header/App-a-top-header'
import AppHeader from '../App-header'
import TodoList from '../Todo-list';
import ItemStatusFilter from '../Item-status-filter';
import ItemAddForm from '../Item-add-form';
import About from '../Pages/About';

import { connect } from 'react-redux';
import { fetchTodoItems, addTodoItemsFromLocal, filterChange } from '../../actions/todo-items-actions';


import './App.css';


class App extends Component {

  render() {

     const { todoData, filter } = this.props;

    const doneCount = todoData
      .filter((todo) => todo.isCompleted).length;
    const todoCount = todoData.length - doneCount;

    return (
      <BrowserRouter>
        <div className="todo-app">
          <AppATopHeader />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AppHeader toDo={todoCount} done={doneCount} />

              <div className="top-panel d-flex">
                <ItemStatusFilter filter={filter}
                />
              </div>

              <TodoList />

              <ItemAddForm  />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  todoData: state.todos.todoItems,
  filter: state.todos.filter
});

export default connect(mapStateToProps, {fetchTodoItems, addTodoItemsFromLocal, filterChange})(App);
