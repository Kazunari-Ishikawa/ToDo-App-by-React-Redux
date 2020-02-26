import React from 'react';
import TodoCreater from '../components/TodoCreator';
import Search from '../components/Search';
import VisibleTodoList from '../containers/VisibleTodoList';

export default class todoApp extends React.Component {
  render() {
    return (
      <div className="l-app">
        <TodoCreater />
        <Search />
        <VisibleTodoList />
      </div>
    );
  }
}
