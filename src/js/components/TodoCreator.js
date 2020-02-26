import React from 'react';
import { connect } from 'react-redux';

class TodoCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        サンプルクリエイター
      </div>
    )
  }
}

export default connect()(TodoCreator)
