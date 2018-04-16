import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewPost extends Component {
    render(){
        return(
            <div>
                NewPost Page
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, {})(NewPost)