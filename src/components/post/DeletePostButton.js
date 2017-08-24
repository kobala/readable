import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as postActions from '../../actions/postActions'
import { withRouter } from 'react-router'

class DeletePostButton extends Component{
    state = {
        showModal: false
    }

    close = () => {
        this.setState({ showModal: false })
    }

    open = () => {
        this.setState({ showModal: true })
    }

    deletePost = () => {
        this.props.actions.deletePost(this.props.postId)
        if(this.props.redirectAfterSuccess){
            this.props.history.push("/")
        }
        this.close()
    }

    render(){
        return (
            <span>
                <Button
                    bsStyle="danger"
                    onClick={this.open}
                >
                    Delete
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete <strong>this post</strong>?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.close}>Close</Button>
                            <Button bsStyle="primary" onClick={this.deletePost}>Yes</Button>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </span>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    }
}

export default withRouter(connect(null, mapDispatchToProps)(DeletePostButton))