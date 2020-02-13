import * as React from 'react';

type Props = {
}

class Toggle extends React.Component {
  private Props: any
  private isToggleOn: boolean

  constructor(props: Props) {
    super(props)
    this.isToggleOn= true;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.isToggleOn = !this.isToggleOn;
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.isToggleOn ? 'ON':'OFF'}
      </button>
    )
  }
}

export default Toggle;
