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
    // Todo：inputの内容を動的にする
    const input = <span className="c-todoList__text">{this.props.text}</span>;
    // const input = <input type="text" class="c-todoList__editForm" />;
    // リストのクラス名定義
    const classNameItem = ClassNames({
      'c-todoList__item': true,
      'c-todoList__item--done': this.props.isDone,
      'c-todoList__item--star': this.props.isStar,
    });
    // アイコンのクラス名定義
    const classNameDone = ClassNames({
      'u-icon': true,
      'c-todoList__icon': true,
      'far': true,
      'fa-circle': !this.props.isDone,
      'fa-check-circle': this.props.isDone,
    });
    const classNameStar = ClassNames({
      'u-icon': true,
      'c-todoList__icon': true,
      'far': !this.props.isStar,
      'fas': this.props.isStar,
      'fa-star': true,
    });

    return (
      <li className={classNameItem}>
        <i className={classNameDone} onClick={this.props.onClickToggleDone}></i>
        <i className={classNameStar} onClick={this.props.onClickToggleStar}></i>
        {input}
        <i className="far fa-trash-alt c-todoList__icon u-icon" onClick={this.props.onClickDelete}></i>
      </li>
    );
  }
}

Todo.propTypes = {
  // id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isStar: PropTypes.bool.isRequired,
  onClickToggleDone: PropTypes.func.isRequired,
  onClickToggleStar: PropTypes.func.isRequired,
  onEnterUpdateTodo: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default Todo
