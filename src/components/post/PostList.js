import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'
import escapeRegExp from 'escape-string-regexp'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as filterActions from '../../actions/filterActions'
import { LinkContainer } from 'react-router-bootstrap'
import DeletePostButton from '../post/DeletePostButton'
import FilterPane from '../common/FilterPane'

class PostList extends Component{
    handleSortingChange = (event) => {
        this.props.filterActions.setSorting(event.target.value)
    }

    handleKeywordChange = (event) => {
        this.props.filterActions.setKeyword(event.target.value)
    }

    getFilteredPosts = () => {
        let posts = this.props.posts.filter(post => !post.deleted);

        const { sorting, keyword } = this.props.postsFilter

        switch(sorting){
            case 'vote_desc' :
                posts = posts.sort((a, b) => b.voteScore > a.voteScore)
                break;
            case 'vote_asc' :
                posts = posts.sort((a, b) => b.voteScore < a.voteScore)
                break;
            case 'date_desc' :
                posts = posts.sort((a, b) => b.timestamp > a.timestamp)
                break;
            case 'date_asc' :
                posts = posts.sort((a, b) => b.timestamp < a.timestamp)
                break;
            default :
                break;
        }

        if(keyword){
            const match = new RegExp(escapeRegExp(keyword), 'i')

            posts = posts.filter(post => match.test(post.title) || match.test(post.body) || match.test(post.author))
        }

        return posts
    }

    render(){
        const { sorting, keyword } = this.props.postsFilter

        return (
            <Grid>
                <Row>
                    <FilterPane
                        selectedSorting={sorting}
                        onSortingChange={this.handleSortingChange}
                        keyword={keyword}
                        onKeywordChange={this.handleKeywordChange}
                    />
                    {this.getFilteredPosts().map((post, key) => (
                        <Col xs={6} md={4} key={key}>
                            <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
                            <span>{helpers.formatDate(post.timestamp)}</span>
                            <p>{post.body}</p>
                            <p>
                                <LinkContainer to={`/post/${post.id}`}>
                                    <Button bsStyle="primary">Details</Button>
                                </LinkContainer>&nbsp;
                                <LinkContainer to={`/post/${post.id}/edit`}>
                                    <Button bsStyle="default">Edit</Button>
                                </LinkContainer>&nbsp;
                                <DeletePostButton postId={post.id}/>
                            </p>
                        </Col>
                    ))}
                </Row>
            </Grid>
        )
    }
}


function mapStateToProps (state, ownProps) {
    let { posts, postsFilter } = state

    if(ownProps.category){
        posts = posts.filter(post => post.category === ownProps.category)
    }

    return {
        posts,
        postsFilter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)