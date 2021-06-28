/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Home from './pages/home';
import TodoProvider from './contexts/todo.context';

function App() {
  return (
    <TodoProvider>
      <div>
        <Home />
      </div>
    </TodoProvider>
  );
}

export default App;
