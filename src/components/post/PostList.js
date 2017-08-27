import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import  { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/filterActions'
import { LinkContainer } from 'react-router-bootstrap'
import DeleteButton from '../common/DeleteButton'
import FilterPane from '../common/FilterPane'
import PostVoteForm from '../post/PostVoteForm'

class PostList extends Component{
    handleSortingChange = (event) => {
        this.props.filterActions.setFilterSorting(event.target.value)
    }

    handleKeywordChange = (event) => {
        this.props.filterActions.setFilterKeyword(event.target.value)
    }

    render(){
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
                    {posts.map((post, key) => (
                        <Col xs={6} md={4} key={key}>
                            <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
                            <span>{helpers.formatDate(post.timestamp)}</span>
                            <p>{post.body}</p>
                            <p>By: {post.author}</p>
                            <PostVoteForm post={post} />
                            <hr />
                            <p>
                                <LinkContainer to={`/post/${post.id}`}>
                                    <Button bsStyle="primary">Details</Button>
                                </LinkContainer>&nbsp;
                                <LinkContainer to={`/post/${post.id}/edit`}>
                                    <Button bsStyle="default">Edit</Button>
                                </LinkContainer>&nbsp;
                                <DeleteButton
                                    objectType="post"
                                    itemId={post.id}
                                />
                            </p>
                        </Col>
                    ))}
                </Row>
            </Grid>
        )
    }
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