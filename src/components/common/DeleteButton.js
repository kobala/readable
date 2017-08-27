import React, { Component } from 'react'
import { Button, Modal, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as postActions from '../../actions/postActions'
import * as commentActions from '../../actions/commentActions'
import { withRouter } from 'react-router'

class DeleteButton extends Component{
    state = {
        showModal: false
    }

    close = () => {
        this.setState({ showModal: false })
    }

    open = () => {
        this.setState({ showModal: true })
    }

    deleteItem = () => {
        switch(this.props.objectType){
            case 'post' :
                this.props.postActions.deletePost(this.props.itemId)
                break
            case 'comment' :
                this.props.commentActions.deletePostComment(this.props.itemId)
                break
            default :
                break
        }

        if(this.props.redirectAfterSuccess){
            this.props.history.push("/")
        }

        this.close()
    }

    render(){
        return (
            <span>
                {this.props.bsSize === 'xs' ?
                    <Button
                        bsSize="xs"
                        bsStyle="danger"
                        onClick={this.open}
                    >
                        <Glyphicon glyph="trash" />
                    </Button>
                    :
                    <Button
                        bsStyle="danger"
                        onClick={this.open}
                    >
                        Delete
                    </Button>
                }
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete <strong>this {this.props.objectType}</strong>?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                            <Button bsStyle="primary" onClick={this.deleteItem}>Yes</Button>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </span>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch),
        commentActions: bindActionCreators(commentActions, dispatch),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(DeleteButton))