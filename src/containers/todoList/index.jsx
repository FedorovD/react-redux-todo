import React from 'react'


import CompletedTodos from './completedTodos'
import InProgressTodos from './inProgressTodos'
import CurrentTodos from './currentTodos'

import  Header  from '../../components/header'

let todoList = () => {
    return (<div>
        <Header />
        <div className="todos-category-wrapper">
            <CurrentTodos />
            <InProgressTodos />
            <CompletedTodos />
        </div>
    </div>
    )
}

export default todoList
