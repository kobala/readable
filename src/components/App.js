import React, { Component } from 'react'
import '../styles/App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route } from 'react-router-dom'
import DefaultPage from './default/DefaultPage'
import ManagePostPage from './post/ManagePostPage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class App extends Component {
  render() {
    return (
        <div id="app">
          <div id="wrap">
            <Header categories={this.props.categories}/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={DefaultPage} />
                  <Route exact path="/post/create" component={ManagePostPage} />
                  <Route exact path="/post/:id/edit" component={ManagePostPage} />
                </Switch>
              </div>
          </div>
          <Footer />
        </div>
    )
  }
}

function mapStateToProps (state) {
    const categories = state.categories.map(category => {
        return {
            text: category.name.charAt(0).toUpperCase() + category.name.slice(1),
            path: category.path
        }
    })

    return {
        categories
    }
}

export default withRouter(connect(mapStateToProps)(App))
