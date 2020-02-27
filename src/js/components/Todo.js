import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      editMode: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickShowEdit = this.handleClickShowEdit.bind(this);
    this.handleClickCloseEdit = this.handleClickCloseEdit.bind(this);
  }
  handleClickShowEdit() {
    this.setState({
      editMode: true,
    });
  }
  handleClickCloseEdit(e) {
    if (e.keyCode === 13 && e.shiftKey === true) {
      this.setState({
        text: e.currentTarget.value,
        editMode: false
      });
      this.props.onEnterUpdateTodo(e.currentTarget.value);
    }
  }
  handleChangeText(e) {
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    const input = (this.state.editMode) ?
      <span className="c-todoList__text" onClick={this.handleClickShowEdit}>{this.state.text}</span> :
      <input type="text" className="c-todoList__editForm" value={this.state.text} onKeyUp={this.handleClickCloseEdit} onChange={this.handleChangeText} />;

    // リストのクラス名定義
    const classNameItem = ClassNames({
      'c-todoList__item': true,
      'c-todoList__item--done': this.props.isDone,
      'c-todoList__item--star': this.props.isStar,
    });
    // アイコンのクラス名定義
    const classNameDone = ClassNames({
      'c-todoList__icon': true,
      'u-icon': true,
      'far': true,
      'fa-circle': !this.props.isDone,
      'fa-check-circle': this.props.isDone,
    });
    const classNameStar = ClassNames({
      'c-todoList__icon': true,
      'u-icon': true,
      'far': !this.props.isStar,
      'fas': this.props.isStar,
      'fa-star': true,
    });

    return (
      <li className={classNameItem}>
        <i className={classNameDone} onClick={this.props.onClickToggleDone}></i>
        <i className={classNameStar} onClick={this.props.onClickToggleStar}></i>
        {input}
        <i className="c-todoList__icon u-icon far fa-trash-alt" onClick={this.props.onClickDelete}></i>
      </li>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isStar: PropTypes.bool.isRequired,
  onClickToggleDone: PropTypes.func.isRequired,
  onClickToggleStar: PropTypes.func.isRequired,
  onEnterUpdateTodo: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default Todo
