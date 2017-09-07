import React  from 'react'
import PageNotFound from '../components/common/PageNotFound'
import { Switch, Route } from 'react-router-dom'
import DefaultPage from '../components/default/DefaultPage'
import ManagePostPage from '../components/post/ManagePostPage'
import PostDetailsPage from '../components/post/PostDetailsPage'
import PostsPage from '../components/category/PostsPage'


export default (
    <Switch>
        <Route exact path="/" component={DefaultPage} />
        <Route exact path="/create" component={ManagePostPage} />
        <Route exact path="/:category/:id/edit" component={ManagePostPage} />
        <Route exact path="/:category/:id" component={PostDetailsPage} />
        <Route exact path="/:category" component={PostsPage}/>
        <Route component={PageNotFound}/>
    </Switch>
)
