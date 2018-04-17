import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOnePost, getPictures, getComments } from '../ducks/reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {
    constructor() {
        super();

        this.state = {
            author: {},
            picture: {},
            title: '',
            body: ''
        }
        this.handleBody = this.handleBody.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }

    componentDidMount() {
        let id = this.props.match.params.post
        this.props.getOnePost(id)
        this.props.getPictures();
        this.props.getComments(id);
    }

    componentWillReceiveProps(nextProps) {
        let id = nextProps.onePost.userId
        let pictures = nextProps.pictures
        axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(author => {
            this.setState({
                author: author.data,
                picture: pictures[this.props.match.params.post - 1]
            })
        })
    }

    handleBody(e){
        this.setState({
            body: e
        })
    }

    handleTitle(e){
        this.setState({
            title: e
        })
    }

    submitComment(){
        let body = {
            name: this.state.title,
            body: this.state.body,
            postId: this.props.match.params.post
        }

        axios.post('https://jsonplaceholder.typicode.com/comments', body).then(resp => {
            this.props.getComments(this.props.match.params.post);
            this.setState({
                title: '',
                body: ''
            })
        })
    }

    render() {
        let post = this.props.onePost
        let url = !this.state.picture ? null : this.state.picture.url;
        let count = 0
        let commentMap = this.props.comments.slice(0).reverse().map((e, i) => {
            if (count < 5) {
                count++
                return (
                    <div className="commenttile" key={e.name}>
                        <h2>{e.name}</h2>
                        <p>{e.body}</p>
                    </div>
                )
            }
        })
        return (
            <div className="postbody">
                <img src={url} alt="" className="postImg" />
                <h1>{post.title}</h1>
                <Link to={`/author/${this.state.author.id}`}><h2>By {this.state.author.name}</h2></Link>
                <p>{post.body}</p>
                <div className="inputfield">
                    Comment Title: <input type="text" onChange={e=>this.handleTitle(e.target.value)}/>
                </div>
                <div className="inputfield">
                    Comment Text: <input type="text" onChange={e=>this.handleBody(e.target.value)}/>
                </div>
                <button onClick={this.newComment}>Leave a Comment</button>
                <h1>Comments</h1>
                {commentMap}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        onePost: state.onePost,
        pictures: state.pictures,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { getOnePost, getPictures, getComments })(Post)