import React from 'react';
// import logo from './logo.svg';
import AppStyle from './App.module.scss';
import Header from './components/Header.jsx';


function App() {
  return (
    <div className={AppStyle.App}>
      <Header />
    </div>
  );
}

export default App;
