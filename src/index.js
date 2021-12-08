import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import MainPage from 'pages/mainPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
