import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchTodo } from '../actions/index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      val: e.target.value
    });
    this.props.dispatch(searchTodo(e.target.value));
  }
  render() {
    return (
      <div className="c-search">
        <input type="text" className="c-search__box" value={this.state.val} onChange={this.handleChange} placeholder="Search" />
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default connect()(Search)
