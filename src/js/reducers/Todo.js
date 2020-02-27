import _ from 'lodash';

// 初期値設定
const initialState = {
  todos: [{
    id: '0',
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
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              isDone: !todo.isDone,
            });
          }
          return todo
        })
      });
    case 'UPDATE':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              text: action.text,
            });
          }
          return todo
        })
      });
    case 'DELETE':
      return Object.assign({}, state, {
        todos: _.reject(state.todos, { 'id': action.id })
      });
    case 'SEARCH':
      return Object.assign({}, state, { 'searchText': action.searchText });
    case 'TOGGLE_STAR':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              isStar: !todo.isStar,
            });
          }
          return todo
        })
      });
    case 'TOGGLE_ALL_DONE':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return Object.assign({}, todo, {
            isDone: true
          });
        })
      });
    case 'DELETE_ALL_TODO':
      return Object.assign({});
    default:
      return state;
  }
}
