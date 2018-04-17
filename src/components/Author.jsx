import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthor} from '../ducks/reducer';
import Map from './Map';

class Author extends Component {
    constructor(){
        super();

        this.state = {
            lat: '',
            lng: ''
        }
    }

    componentDidMount(){
        let id = this.props.match.params.author;
        this.props.getAuthor(id);
    }

    componentWillReceiveProps(nextProps){
        let lat = nextProps.author.address.geo.lat;
        let lng = nextProps.author.address.geo.lng;
        this.setState({
            lat: lat,
            lng: lng
        })
    }

    render(){
        return(
            <div className="postbody authorbody">
                <h1>Name: {this.props.author.name}</h1>
                <h2>Email: {this.props.author.email}</h2>
                <h2>Phone: {this.props.author.phone}</h2>
                <h2>Website: {this.props.author.website}</h2>
                <Map
                lat={this.state.lat}
                lng={this.state.lng}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        author: state.author
    }
}

export default connect(mapStateToProps, {getAuthor})(Author)