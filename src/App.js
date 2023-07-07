import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <div>
      <Greeting name="ali" />
      <Greeting name="aman" />
      <Greeting name="sadyr" />
    </div>
  );
};

export default App;

