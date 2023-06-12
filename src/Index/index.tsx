import React, { Component } from 'react';

interface IProps {}
interface IState {
  show: boolean;
}
class Main extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    alert('halo');
  }

  onToggle = () => {
    this.setState((state) => ({
      show: !state.show
    }))
  };

  render() {
    const { show } = this.state;
    return (
        <div>
          {show && <h1>Hello World</h1>}
          <button onClick={this.onToggle}>{show ? 'hide' : 'show'}</button>
        </div>
    );
  }
}

export default Main;
