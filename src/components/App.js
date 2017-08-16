import React, { Component } from 'react'
import '../styles/App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route } from 'react-router-dom'
import DefaultPage from './default/DefaultPage'
import CreatePostPage from './post/CreatePostPage'

class App extends Component {
  render() {
    return (
        <div id="app">
          <div id="wrap">
            <Header />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={DefaultPage} />
                  <Route exact path="/post/create" component={CreatePostPage} />
                </Switch>
              </div>
          </div>
          <Footer />
        </div>
    )
  }
}

export default App
