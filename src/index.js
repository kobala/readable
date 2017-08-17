import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { loadPosts } from './actions/postActions'
import App from './components/App'

const store = configureStore()
store.dispatch(loadPosts())

render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))
