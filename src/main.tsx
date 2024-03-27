import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Container/App.tsx'
// import Booking from './Components/Page/Booking';
import { Provider } from 'react-redux'
import {store} from './Storage'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(

  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>
)
