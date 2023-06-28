import React from 'react'
import './../Todo/Todo.css'

const Todo = () => {
    return (
        <div className='App'>
            <div className='container'>
                <h4>ToDo App</h4>
                <div className='top'>
                    <textarea className='input' type='text' placeholder='App Todos...' />

                    <div className='add'>Add</div>
                </div>
                <div className='list'>
                </div>
            </div>
        </div>
    )
}

export default Todo