import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as commentActions from '../../../actions/commentActions'

class PostCommentVoteForm extends Component {
    handleVotePostComment = (option) => {
        this.props.commentActions.votePostComment(this.props.comment.id, option)
    }

    render(){
        const { comment } = this.props

        return(
            <div className="action">
                <Button bsSize="xs" onClick={() => this.handleVotePostComment('upVote')}>
                    <Glyphicon glyph="chevron-up" />
                </Button>
                <div className={`score-vote ${comment.voteScore >= 0 ? 'up' : 'down'}`}>
                    {comment.voteScore}
                </div>
                <Button bsSize="xs" onClick={() => this.handleVotePostComment('downVote')}>
                    <Glyphicon glyph="chevron-down" />
                </Button>
            </div>
        )

    }
}

function mapDispatchToProps (dispatch) {
    return {
        commentActions: bindActionCreators(commentActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(PostCommentVoteForm)