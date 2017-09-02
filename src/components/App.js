import React, { Component } from 'react'
import '../styles/App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route } from 'react-router-dom'
import DefaultPage from './default/DefaultPage'
import ManagePostPage from './post/ManagePostPage'
import PostDetailsPage from './post/PostDetailsPage'
import PostsPage from './category/PostsPage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'


class App extends Component {
  render() {
    return (
        <div id="app">
          <div id="wrap">
            <Header categories={this.props.categories} loading={this.props.loading}/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={DefaultPage} />
                  <Route exact path="/post/create" component={ManagePostPage} />
                  <Route exact path="/post/:id" component={PostDetailsPage} />
                  <Route exact path="/post/:id/edit" component={ManagePostPage} />
                  <Route exact path="/posts/:category" component={PostsPage}/>
                </Switch>
              </div>
          </div>
          <Footer />
        </div>
    )
  }
}

App.propTypes = {
    categories: PropTypes.array.isRequired,
}

function mapStateToProps (state) {
    const categories = state.categories.map(category => {
        return {
            text: category.name.charAt(0).toUpperCase() + category.name.slice(1),
            path: category.path
        }
    })

    return {
        categories,
        loading: state.ajaxCallsInProgress
    }
}

export default withRouter(connect(mapStateToProps)(App))
