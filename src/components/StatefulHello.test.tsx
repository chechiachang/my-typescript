import * as React from 'react';
import * as enzyme from 'enzyme';
import StatefulHello from './StatefulHello';

it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<StatefulHello name='Daniel' />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<StatefulHello name='Daniel' enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
  const hello = enzyme.shallow(<StatefulHello name='Daniel' enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasmLevel is 0', () => {
  expect(() => {
    enzyme.shallow(<StatefulHello name='Daniel' enthusiasmLevel={0}/>);
  }).toThrow();
});

it('theos when the enthusiasmLevel is negative', () => {
  expect(() => {
    enzyme.shallow(<StatefulHello name='Daniel' enthusiasmLevel={-1}/>);
  });
})
