import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    console.log(this.props);
    // Todo：inputの内容を動的にする
    const input = <span className="c-todoList__text">{this.props.text}</span>;
    // const input = <input type="text" class="c-todoList__editForm" />;
    return (
      // Todo：c-todoList__item、チェックアイコン、スターアイコンのクラス名を動的にする
      <li className="c-todoList__item">
        <i className="far fa-check-circle c-todoList__icon u-icon u-icon--check" onClick={this.props.onClickToggleDone}></i>
        <i className="far fa-star c-todoList__icon u-icon u-icon--star" onClick={this.props.onClickToggleStar}></i>
        {input}
        <i className="far fa-trash-alt c-todoList__icon u-icon u-icon--trash" onClick={this.props.onClickDelte}></i>
      </li>
    );
  }
}

Todo.propTypes = {

};

export default Todo
