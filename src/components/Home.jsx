import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, getPictures } from '../ducks/reducer';
import { Link } from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        this.props.getPosts()
        this.props.getPictures()
    }

    render() {
        let postMap = this.props.posts.map((e, i) => {
            let picturesMap = this.props.pictures.map((x, y) => {
                if (e.id === x.id) {
                    return <img src={`${x.thumbnailUrl}`} alt=""/>
                }
            })
            let title = e.title.slice(0, 15) + '...'
            let body = e.body.slice(0, 30) + '...'
            return (
                <Link to={`/posts/${e.id}`} className="posttile" key={e.title}>
                    {picturesMap}
                    <div className="posttilebody">
                        <h1>{title}</h1>
                        <p>{body}</p>
                    </div>
                </Link>
            )
        })

        return (
            <div className="homebody">
                {postMap}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        pictures: state.pictures
    }
}

export default connect(mapStateToProps, { getPosts, getPictures })(Home)