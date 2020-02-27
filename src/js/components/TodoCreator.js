import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class TodoCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      errMsg: '',
    };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  createID() {
    return Math.random().toString(16);
  }
  handleChange(e) {
    this.setState({
      val: e.target.value
    });
  }
  handleKeyUp(e) {
    if (e.keyCode === 13 && e.shiftKey === true) {
      const val = e.target.value;

      if (!val) {
        this.setState({
          errMsg: '入力が空です'
        });
        return;
      }
      this.props.dispatch(addTodo(this.createID(), val));

      this.setState({
        val: '',
        errMsg: ''
      });
    }
  }
  render() {
    const errMsg = (this.state.errMsg) ? <span className="err-msg">{this.state.errMsg}</span> : '';
    return (
      <div>
        {errMsg}
        <div className="c-input">
          <input type="text" className="c-input__box" value={this.state.val} onChange={this.handleChange} onKeyUp={this.handleKeyUp} placeholder="Add task" />
        </div>
      </div>
    );
  }
}

TodoCreator.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default connect()(TodoCreator)
