import React, {Component} from 'react';
import TodoListItem from '../Todo-list-item';
import { connect } from 'react-redux';
import { fetchTodoItems, addTodoItemsFromLocal} from '../../actions/todo-items-actions';

import './Todo-list.css'

class TodoList extends Component {

  componentDidMount() {
    // проверить, есть ли todos в локальном хранилище
    const todoData = localStorage.getItem("todos");
    if (todoData) {
      //если есть фетчим из локал стора
      this.props.addTodoItemsFromLocal(JSON.parse(todoData));
      return;
    }
    //иначе фетчим с сервера (для установки начального списка дел)
    this.props.fetchTodoItems();
  }

  componentDidUpdate(_prevProps, prevState) {
    //если состояние нашего state изменилось, сохраняем новые данные в локальном хранилище
    if (this.props.todoItems !== _prevProps.todoItems) {
        localStorage.setItem("todos", JSON.stringify(this.props.todoItems));
      }
    
  }

  // должен изменять свойство в сторе(глобально)
  filterItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.isCompleted);
      case 'done':
        return items.filter((item) => item.isCompleted);
      default:
        return items;
    }
  }

  render() {

    // const { todos, onDeleted, onToggleComplete} = this.props;
    const {todoItems, filter } = this.props;
    const visibleItems = this.filterItems(todoItems, filter);
    const taskElements = visibleItems.map((todo) => {
      return (
          <li key={todo.id} className="list-group-item">
            <TodoListItem todoTask={todo.task}
                          todoIsCompleted={todo.isCompleted}
                          todoId={todo.id}
            />
          </li>
      );
    });

    return ( 
      <ul className="list-group todo-list">
        { taskElements }
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todoItems: state.todos.todoItems,
  filter: state.todos.filter
});

export default connect(mapStateToProps, {fetchTodoItems, addTodoItemsFromLocal})(TodoList);