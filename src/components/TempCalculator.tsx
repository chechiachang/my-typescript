import * as React from 'react';

interface IProps {
  celsius?: number
  scale: string
}

interface IState {
  temperature: number
}

let scaleNames: Map<string, string> = new Map([
  ['c', 'Celsius'],
  ['f', 'Fahrenhei']
])


const BoilingVerdict: React.FunctionComponent<{celsius: number}> = ({
  celsius
}) => {
  if (celsius >= 100 ) {
    return <p>The water would boil.</p>
  }else {
    return <p>The water would not boil.</p>
  }
}

class TemperatureInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {temperature: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent) {
    this.setState({temperature: parseFloat(event.currentTarget.tagName)});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames.get(scale)}:</legend>
        <input value={temperature}
              onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export class TempCalculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default TempCalculator;
