import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from 'react-modal';

const modalStyle = {
    overlay: {
        background: "rgba(0,0,0,.25)"
    },
    content: {
        height: "400px",
        width: "400px",
        background: "white",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }
}

class NewPost extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            body: ''
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleBody(e) {
        this.setState({
            title: e
        })
    }

    handleTitle(e) {
        this.setState({
            body: e
        })
    }

    submitPost() {
        let body = {
            userId: 1,
            title: this.state.title,
            body: this.state.body
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', body).then(resp => {
            this.openModal();
        })
    }
    
    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }
    
    closeModal() {
        window.location.assign('http://localhost:3000')
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        return (
            <div className="postbody">
                <h1>Create a New Post Below</h1>
                <div className="inputfield">
                    Post Title: <input type="text" onChange={e => this.handleBody(e.target.value)} />
                </div>
                <div className="inputfield">
                    Post Body: <input className="bodyinput" type="text" onChange={e => this.handleTitle(e.target.value)} />
                </div>
                <button onClick={this.submitPost}>Submit</button>
                <Modal onRequestClose={this.closeModal} isOpen={this.state.modalIsOpen} style={modalStyle}>
                    <button onClick={this.closeModal}>Close</button>
                    <h1>Thank you for submitting a new post!</h1>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {})(NewPost)