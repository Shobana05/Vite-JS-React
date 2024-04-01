import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/assets/components/App'
import Header from './assets/components/header'

import '../src/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Header/>
    <App />
   
 
  

  </React.StrictMode>,
)
