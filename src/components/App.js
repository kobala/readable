import React, { Component } from 'react'
import '../styles/App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import PageNotFound from './common/PageNotFound'
import '../styles/bootstrap/css/bootstrap.css'
import { Switch, Route } from 'react-router-dom'
import DefaultPage from './default/DefaultPage'
import ManagePostPage from './post/ManagePostPage'
import PostDetailsPage from './post/PostDetailsPage'
import PostsPage from './category/PostsPage'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'


class App extends Component {
  render () {
    return (
        <div id="app">
          <div id="wrap">
            <Header categories={this.props.categories} loading={this.props.loading}/>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={DefaultPage} />
                  <Route exact path="/create" component={ManagePostPage} />
                  <Route exact path="/:category/:id/edit" component={ManagePostPage} />
                  <Route exact path="/:category/:id" component={PostDetailsPage} />
                  <Route exact path="/:category" component={PostsPage}/>
                  <Route component={PageNotFound}/>
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
