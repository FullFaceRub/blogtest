import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class NewPost extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            body: ''
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    handleBody(e){
        this.setState({
            title: e
        })
    }

    handleTitle(e){
        this.setState({
            body: e
        })
    }

    submitPost(){
        let body = {
            userId: 1,
            title: this.state.title,
            body: this.state.body
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', body).then(resp => {
            console.log(resp);
            window.location.assign('http://localhost:3000/')
        })
    }

    render(){
        return(
            <div className="postbody">
            <div className="inputfield">
                <input type="text" onChange={e=>this.handleBody(e.target.value)}/>
            </div>
            <div className="inputfield">
                <input type="text" onChange={e=>this.handleTitle(e.target.value)}/>
            </div>
            <button onClick={this.submitPost}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, {})(NewPost)