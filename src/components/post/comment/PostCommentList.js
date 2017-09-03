import React, { Component } from 'react'
import { Panel, Glyphicon, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap'
import PostCommentVoteForm from './PostCommentVoteForm'
import DeleteButton from '../../common/DeleteButton'
import FilterPane from '../../common/FilterPane'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as filterActions from '../../../actions/filterActions'
import * as helpers from '../../../utils/helpers'
import '../../../styles/PostCommentList.css'
import PropTypes from 'prop-types'

class PostCommentList extends Component {
    componentWillMount (){
        this.props.filterActions.resetFilter()
    }

    handleSortingChange = (e) => {
        this.props.filterActions.setFilterSorting(e.target.value)
    }

    handleKeywordChange = (e) => {
        this.props.filterActions.setFilterKeyword(e.target.value)
    }

    render (){
        const comments = helpers.getFilteredList(this.props.comments, this.props.filter)

        const { sorting, keyword } = this.props.filter

        const panelHeading = (
            <div>
                <Glyphicon glyph="comment" />&nbsp;
                <h3 className="panel-title">
                    Comments
                </h3>
                {comments.length > 0 && <span className="label label-info"> {comments.length} </span>}
            </div>
        )

        return (
            <div>
                <div className="comment-filter">
                    <FilterPane
                        selectedSorting={sorting}
                        onSortingChange={this.handleSortingChange}
                        keyword={keyword}
                        onKeywordChange={this.handleKeywordChange}
                    />
                </div>
                <Panel className="widget" header={panelHeading}>
                    <ListGroup>
                        {comments.map((comment, key) => (
                            <ListGroupItem key={key}>
                                <Row>
                                    <Col xs={2} md={1} className="comment-score-vote">
                                        <PostCommentVoteForm
                                            comment={comment}
                                        />
                                    </Col>
                                    <Col xs={10} md={11}>
                                        <div className="comment-text">
                                            {comment.body}
                                        </div>
                                        <div>
                                            <div className="mic-info">
                                                By: <b>{comment.author}</b> on {helpers.formatDate(comment.timestamp)}
                                            </div>
                                        </div>
                                        <div className="action">
                                            <Button bsSize="xs" bsStyle="primary" onClick={() => this.props.onCommentEdit(comment)}>
                                                <Glyphicon glyph="pencil" />
                                            </Button>&nbsp;
                                            <DeleteButton
                                                bsSize="xs"
                                                objectType="comment"
                                                itemId={comment.id}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                        {(this.props.loading && !comments) && <div className="comments-loading">Loading</div>}
                    </ListGroup>
                </Panel>
            </div>
        )
    }
}

PostCommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    onCommentEdit: PropTypes.func.isRequired
}

function mapStateToProps (state) {
    let { filter } = state

    return {
        filter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentList)