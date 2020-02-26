import React from 'react';
import { connect } from 'react-redux';

export class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sample">
        サンプルサーチ
      </div>
    );
  }
}

export default connect()(Search)
