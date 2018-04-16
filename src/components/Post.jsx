import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    render(){
        return(
            <div>
                Post Page
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, {})(Post)