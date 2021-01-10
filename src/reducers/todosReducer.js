import { FETCH_TODO_ITEMS, NEW_TODO_ITEM, UPDATE_TODO_ITEM, FILTER_CHANGE } from '../actions/types';

const initialState = {
    todoItem: {},
    todoItems: [],
    filter: 'all'  //active, all, done
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_ITEMS:
          return {
            ...state,
            todoItems: action.payload
          };
        case NEW_TODO_ITEM:
          return {
            ...state,
            todoItems: [...state.todoItems, action.payload]
          };
        case UPDATE_TODO_ITEM:
          return {
            ...state,
            todoItems: action.payload
          };
        case FILTER_CHANGE:
          return {
              ...state,
              filter: action.payload
          };
        default:
          return state;
      }
}

