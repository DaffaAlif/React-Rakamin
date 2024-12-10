import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductCard from './ProductCard.jsx'
import ProductList from './ProductList.jsx'
import State from './State.jsx'
import TaskManagerBSI from './TaskManagerBSI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductList />
    <State/>
    <TaskManagerBSI/>
  </StrictMode>,
)
