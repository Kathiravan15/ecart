import React from 'react'
import './App.css';
import Router from './routes';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './redux/store';



const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router />
      </div>
    </Provider>

  )
}

export default App
