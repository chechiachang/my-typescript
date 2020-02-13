import * as React from 'react';

interface Props{
}

type Option = {value:string}

interface IState {
  selectValue: string
  value?: string
  text?: string
}

export class NameForm extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: '',
      text: 'long text',
      selectValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.FormEvent) {
    this.setState({
      value: event.currentTarget.tagName.toUpperCase(),
      text: 'long text'
    });
  }

  handleSubmit(event: React.FormEvent) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  } 

  options = [{value:"lemon"},{value:"pineapple"},{value:"apple"}];
  optionList = this.options.map((option) => 
    <option value={option.value}>{option.value}</option>
  );

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.selectValue} onChange={this.handleChange}>
          {this.optionList}
        </select>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Essay:
          <textarea value={this.state.text} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
