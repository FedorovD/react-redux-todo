import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TodoList from '../containers/todoList/index'
import ShowDetails from '../containers/showDetails'
import AddTodo from '../containers/addTodo'



export default function () {
    return (
        <div>
            
            <Switch>
                <Route exact path='/' component={TodoList} />
                <Route path='/details/:id' component={ShowDetails} />
                <Route path='/add' component={AddTodo} />
            </Switch>
        </div>)
}

