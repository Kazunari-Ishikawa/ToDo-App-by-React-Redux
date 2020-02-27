import React from 'react';
import TodoCreator from '../components/TodoCreator';
import Search from '../components/Search';
import VisibleTodoList from '../containers/VisibleTodoList';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="l-app">
        <TodoCreator />
        <Search />
        <VisibleTodoList />
      </div>
    );
  }
}
