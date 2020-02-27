import { connect } from 'react-redux';
import { toggleDone, updateTodo, deleteTodo, toggleStar } from '../actions/index';
import TodoList from '../components/TodoList';

const filterTodo = elm => {
  const regexp = new RegExp('^' + this.searchText, 'i');
  return (elm.text.match(regexp));
};

const mapStateToProps = state => {
  return {
    todos: (state.todo.searchText) ? state.todo.todos.filter(filterTodo, state.todo) : state.todo.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDone: id => {
      dispatch(toggleDone(id));
    },
    updateTodo: (id, text) => {
      dispatch(updateTodo(id, text));
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id));
    },
    toggleStar: id => {
      dispatch(toggleStar(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
