import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  state = { count: 0 };

  hanleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  PreHanleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.hanleClick}>click</button>
        <button onClick={this.PreHanleClick}>pre click</button>
        <h1>
          count {this.state.count} {this.props.message}
        </h1>
      </div>
    );
  }
}
