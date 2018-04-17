import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className="mainheader">
                <div className="logo"><Link to='/'>blogtest</Link></div>
                <nav className="navbar"> 
                    <Link to='/'>Home</Link>
                    <Link to='/newpost'>New Post</Link>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, {})(Header)