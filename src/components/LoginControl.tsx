import * as React from 'react';
import Greeting from './Greeting';

interface Props {
  onClick: any // Suppressed!
}

function LoginButton(props: Props) {
  return (
    <button onClick={props.onClick}>
    Login
    </button>
  );
}

function LogoutButton(props: Props) {
  return (
    <button onClick={props.onClick}>
    Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props: Props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    //const isLoggedIn = this.state.isLoggedIn;
    const isLoggedIn = true; // Suppressed!
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
