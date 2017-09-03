import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/filterActions'
import FilterPane from '../common/FilterPane'
import '../../styles/PostList.css'
import PostInList from './PostInList'
import PropTypes from 'prop-types'

class PostList extends Component{
    componentWillMount () {
        this.props.filterActions.resetFilter()
    }

    handleSortingChange = (e) => {
        this.props.filterActions.setFilterSorting(e.target.value)
    }

    handleKeywordChange = (e) => {
        this.props.filterActions.setFilterKeyword(e.target.value)
    }

    render () {
        const posts = helpers.getFilteredList(this.props.posts, this.props.filter)

        const { sorting, keyword } = this.props.filter

        return (
            <Grid>
                <Row>
                    <FilterPane
                        selectedSorting={sorting}
                        onSortingChange={this.handleSortingChange}
                        keyword={keyword}
                        onKeywordChange={this.handleKeywordChange}
                    />
                    <hr/>
                    <Row className="display-flex">
                        {posts.map((post, key) => (
                            <PostInList post={post} key={key} />
                        ))}
                    </Row>
                </Row>
            </Grid>
        )
    }
}

PostList.propTypes = {
    filter: PropTypes.object.isRequired,
    posts: PropTypes.array.isRequired,
}

function mapStateToProps (state, ownProps) {
    let { posts, filter } = state

    if(ownProps.category){
        posts = posts.filter(post => post.category === ownProps.category)
    }

    return {
        posts,
        filter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList))