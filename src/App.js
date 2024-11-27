import React from 'react';
import SimpleCounter from './components/SimpleCounter';
import FormInput from './components/FormInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <h1>React State and Hooks Performance Assessment</h1>
      <SimpleCounter />
      <FormInput />
      <TodoList />
    </div>
  );
}

export default App;