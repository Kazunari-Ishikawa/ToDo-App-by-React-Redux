import _ from 'lodash';

// 初期値設定
const initialState = {
  todos: [{
    id: 0,
    text: 'sample',
    isDone: false,
    isStar: false
  }],
  searchText: ''
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        todos: [...state.todos,
        { id: action.id, text: action.text, isDone: false, isStar: false }]
      };
    case 'TOGGLE_DONE':
      const done = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            isDone: !todo.isDone,
          });
        }
      });
      return Object.assign({}, state, done);
    case 'UPDATE':
      const prevTodo = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            text: prevTodo.text,
          });
        }
      });
      return Object.assign({}, state, prevTodo);
    case 'DELETE':
      return Object.assign({}, state, {
        todos: _.reject(state.todos, { 'id': action.id })
      });
    case 'SEARCH':
      return Object.assign({}, state, { searchText: action.searchText });
    case 'TOGGLE_STAR':
      const star = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            isStar: !todo.isStar,
          });
        }
      });
      return Object.assign({}, state, star);
    default:
      return state;
  }
}