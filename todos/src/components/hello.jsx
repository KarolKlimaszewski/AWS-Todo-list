import React from 'react';
import ReactDOM from 'react-dom';
export class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
      test: 1,
      todos: null,
    }
  }

  componentDidMount = () => {
    fetch('https://z9k504z994.execute-api.us-east-1.amazonaws.com/dev/todos')
    .then(response => response.json())
    .then(data => this.setState({
      todos: data,
    }))
  }

  // handleHeightChange = (event) => {
  //   console.log(event)
  // };

  render() {
    console.log(this.state.todos);
    return (
      <h1>{this.state.hello}</h1>
    )
  }
}
