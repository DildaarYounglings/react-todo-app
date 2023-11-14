import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoListContextWrapper } from './context/TodoListContextWrapper.jsx'
import { Calendar } from './components/Calendar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoListContextWrapper>
      {/*<App />*/}
      <Calendar/>
    </TodoListContextWrapper>
  </React.StrictMode>,
)
