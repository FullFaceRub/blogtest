import React, {Component} from 'react';
import {connect} from 'react-redux';

class Author extends Component {
    render(){
        return(
            <div>
                Author Page
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, {})(Author)