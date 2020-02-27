import React from 'react';
import TodoCreator from '../components/TodoCreator';
import Search from '../components/Search';
import VisibleTodoList from '../containers/VisibleTodoList';
import Title from './Title';
import AllChange from './AllChange';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="l-app">
        <Title />
        <TodoCreator />
        <Search />
        <AllChange />
        <VisibleTodoList />
      </div>
    );
  }
}
