import React from 'react';
import TodoCreator from '../components/TodoCreator';
import Search from '../components/Search';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TodoCreator />
        <Search />
      </div>
    );
  }
}
