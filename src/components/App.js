import React, { Component } from 'react'
import '../styles/App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import '../styles/bootstrap/css/bootstrap.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Routes from '../routes'

class App extends Component {
  render () {
    return (
        <div id="app">
          <div id="wrap">
            <Header categories={this.props.categories} loading={this.props.loading}/>
              <div className="container">
                  {Routes}
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
