import * as React from 'react';

interface IUser {
}

const [val, toggle] = React.useState(false)

const [user, setUser] = React.useState<IUser | null>(null);
//setUser(newUser);
