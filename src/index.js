import './index.css'
import App from './app'
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)