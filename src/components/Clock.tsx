import * as React from 'react';

interface Props {
  date?: Date
}

interface State {
  date: Date
}

class Clock extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render () {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock;
