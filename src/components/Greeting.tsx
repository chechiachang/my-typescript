import * as React from 'react';

interface Props {
}

const UserGreeting: React.FunctionComponent = () => {
  return (
    <h1>Welcom Back!</h1>
  );
}

const GuestGreeting: React.FunctionComponent = () => {
  return (
    <h1>Please sign in.</h1>
  );
}

const Greeting: React.FunctionComponent<{isLoggedIn: boolean}> = ({
  isLoggedIn
}) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Greeting;
