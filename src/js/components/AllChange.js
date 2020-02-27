import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleAllDone, deleteAllTodo } from '../actions/index'

class AllChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
    this.handleClickDone = this.handleClickDone.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }
  handleClickDone() {
    this.props.dispatch(toggleAllDone(this.state.isDone));
    this.setState({
      isDone: !this.state.isDone
    })
  }
  handleClickDelete() {
    this.props.dispatch(deleteAllTodo());
  }
  render() {
    const allDoneBtn = (this.state.isDone) ? 'All Todo' : 'All Done';
    return (
      <div className="c-btnArea">
        <div className="c-btnArea__btn c-btnArea__btn--done" onClick={this.handleClickDone}>
          <p className="c-btnArea__text">{allDoneBtn}</p>
          <i className="fas fa-check-square c-btnArea__icon u-icon--alldone"></i>
        </div>
        <div className="c-btnArea__btn c-btnArea__btn--clear" onClick={this.handleClickDelete}>
          <p className="c-btnArea__text">All Clear</p>
          <i className="fas fa-trash c-btnArea__icon u-icon--alltrash"></i>
        </div>
      </div>
    );
  }
}

AllChange.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AllChange)
