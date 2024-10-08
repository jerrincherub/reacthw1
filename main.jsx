import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Thecalculator from "./components/Homework/calculator/calculator.jsx";
import Addition from "./components/Homework/calculator/addition.jsx";
import Substraction from "./components/Homework/calculator/substraction.jsx";
import Multiplication from "./components/Homework/calculator/multiplication.jsx";
import Division from "./components/Homework/calculator/division.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Thecalculator />
    <Addition/>
    <Substraction/>
    <Multiplication/>
    <Division/>
  
  </StrictMode>,
)
