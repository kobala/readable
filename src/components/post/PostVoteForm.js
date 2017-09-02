import React, { Component } from 'react'
import { Button, Glyphicon, Label } from 'react-bootstrap'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as postActions from '../../actions/postActions'
import PropTypes from 'prop-types'

class PostVoteForm extends Component {
    handleVotePost = (option) => {
        this.props.postActions.votePost(this.props.post.id, option)
    }

    render () {
        const { post } = this.props

        return(
            <div>
                <Button bsSize="xsmall" onClick={() => this.handleVotePost('upVote')}><Glyphicon glyph="chevron-up" /></Button>
                &nbsp;<Label bsStyle={post.voteScore >= 0 ? 'success' : 'danger'}>{post.voteScore}</Label>&nbsp;
                <Button bsSize="xsmall" onClick={() => this.handleVotePost('downVote')}><Glyphicon glyph="chevron-down" /></Button>
            </div>
        )
    }
}

PostVoteForm.propTypes = {
    post: PropTypes.object.isRequired
}

function mapDispatchToProps (dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(PostVoteForm)