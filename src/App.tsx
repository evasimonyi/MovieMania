import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-2'>
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
