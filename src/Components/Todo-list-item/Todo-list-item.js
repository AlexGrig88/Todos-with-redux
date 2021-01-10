import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateTodoItem } from '../../actions/todo-items-actions';

import './Todo-list-item.css';

class TodoListItem extends Component {

    onDeleted = (id) => {
          const { todoItems } = this.props;
          const idx = todoItems.findIndex((item) => item.id === id);
    
          const newArray = [
            ...todoItems.slice(0, idx),
            ...todoItems.slice(idx + 1)
          ];
    
          this.props.updateTodoItem(newArray);
      };

    onToggleComplete = (id) => {
        const { todoItems } = this.props;
        const idx = todoItems.findIndex((item) => item.id === id);  //находим индекс объекта для изменения

        const oldItem = todoItems[idx];     //извлекаем этот объект
        const newItem = {
        ...oldItem,                     //и создаем новый с изменённым значение ключа isCompleted
        isCompleted: !oldItem.isCompleted
        };

        const newArray = [
            ...todoItems.slice(0, idx),
            newItem,
            ...todoItems.slice(idx + 1)
        ];

        this.props.updateTodoItem(newArray);
     }

    render() {
        //const { todoTask, onDeleted, onToggleComplete, todoIsCompleted} = this.props;
        const { todoTask, todoIsCompleted, todoId } = this.props;

        let classNames = 'todo-list-item';
        if(todoIsCompleted) {
            classNames += ' done';
        }

        return (
        <div className={classNames}>
            <input type="checkbox"
                   defaultChecked={todoIsCompleted}
                   onChange={(id) => this.onToggleComplete(todoId)}      
            />
            <span className="todo-list-item-label">
                { todoTask }
            </span>
            <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={(id) => {this.onDeleted(todoId)}}>
          <i className="fa fa-trash-o" />
        </button>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    todoItems: state.todos.todoItems
  });

export default connect(mapStateToProps, {updateTodoItem})(TodoListItem);