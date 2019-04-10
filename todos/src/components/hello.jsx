import React from 'react';
import ReactDOM from 'react-dom';
export class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
      test: 1
    }
  }

  // handleHeightChange = (event) => {
  //   console.log(event)
  // };

  render() {
    return (
      <h1>{this.state.hello}</h1>
    )
  }
}
