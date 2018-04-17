import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Author from './components/Author';
import NewPost from './components/NewPost';
import Post from './components/Post';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/author/:author' component={Author}/>
        <Route path='/newpost' component={NewPost}/>
        <Route exact distinct path='/posts/:post' component={Post}/>
    </Switch>
)