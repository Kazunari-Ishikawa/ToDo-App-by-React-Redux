import React from 'react';
import TodoCreator from '../components/TodoCreator';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="l-app">
        <TodoCreator />
      </div>
    );
  }
}
