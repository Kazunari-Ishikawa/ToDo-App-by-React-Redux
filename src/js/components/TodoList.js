import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos, toggleDone, toggleStar, updateTodo, deleteTodo } = this.props;
    let tasks = [];
    for (let i in todos) {
      tasks.push(<Todo key={todos[i].id} {...todos[i]}
        onClickToggleDone={() => toggleDone(todos[i].id)}
        onClickToggleStar={() => toggleStar(todos[i].id)}
        onEnterUpdateTodo={(text) => updateTodo(todos[i].id, text)}
        onClickDelete={() => deleteTodo(todos[i].id)} />);
    }
    return (
      <ul className="c-todoList">
        {tasks}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      isStar: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleDone: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
