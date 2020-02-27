import React from 'react';
import { connect } from 'react-redux';
import {toggleAllDone, deleteAllTodo} from '../actions/index'

class AllChange extends React.Component {
  render() {
    return (
      <div className="c-btnArea">
        <div className="c-btnArea__btn c-btnArea__btn--done">
          <p className="c-btnArea__text">All Done</p>
          <i className="fas fa-check-square c-btnArea__icon u-icon--alldone"></i>
        </div>
        <div className="c-btnArea__btn c-btnArea__btn--clear">
          <p className="c-btnArea__text">All Clear</p>
          <i className="fas fa-trash c-btnArea__icon u-icon--alltrash"></i>
        </div>
      </div>
    );
  }
}

export default connect()(AllChange)
