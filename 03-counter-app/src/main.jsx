import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/AppComponenet/App.jsx'
import { EsneiderApp } from './Components/EsneiderComponenet/EsneiderApp.jsx'
import { CounterApp } from './Components/CounterAppComponent/CounterApp.jsx'
import './index.css'

// todo react inicia desde este componente
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={ 100 }/>
    {/* <EsneiderApp title='TITULO DESDE MAIN' /> */}
  </React.StrictMode>,
)
