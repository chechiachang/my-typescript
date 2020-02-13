import * as React from 'react';

const ListItem: React.FunctionComponent<{value: number}> = ({
  value
}) => {
  return (
    <li>
      {value}
    </li>
  );
}

const NumberList: React.FunctionComponent<{numbers: number[]}> = ({
  numbers
}) => {
  const listItems = numbers.map((number) => 
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default NumberList;
