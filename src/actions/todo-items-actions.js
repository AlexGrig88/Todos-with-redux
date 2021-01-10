import { FETCH_TODO_ITEMS, NEW_TODO_ITEM, UPDATE_TODO_ITEM, FILTER_CHANGE } from './types';

export const fetchTodoItems = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=7")
      .then(res => res.json())
      .then(todos => {
        const newTodos = todos.map((item) => {
          return {
            id: item.id,
            task: item.title.charAt(0).toUpperCase() + item.title.slice(1),
            isCompleted: item.completed,
          }
        });
        dispatch({
            type: FETCH_TODO_ITEMS,
            payload: newTodos
        })
      });
};

export const addTodoItemsFromLocal = (todos) => dispatch => {
        dispatch({
            type: FETCH_TODO_ITEMS,
            payload: todos
        })
      
};

export const addTodoItem = (todo) => dispatch => {
    dispatch({
        type: NEW_TODO_ITEM,
        payload: todo
    })
  
};

export const updateTodoItem = (todos) => dispatch => {
    dispatch({
        type: UPDATE_TODO_ITEM,
        payload: todos
    })
  
};

export const filterChange = (toggle) => dispatch => {
  dispatch({
      type: FILTER_CHANGE,
      payload: toggle
  })

};