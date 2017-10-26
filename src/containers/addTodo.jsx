import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let name, type, details;

  return (
    <div>
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><Link to={`/`}>Main</Link></li>
          <li className="is-active"><a aria-current="page">Add</a></li>
        </ul>
      </nav>

      {/* <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form> */}

      <form className="detailsForm" onSubmit={e => {
        e.preventDefault()
        if (!name.value.trim()) {
          return
        }
        dispatch(addTodo(name.value))
        name.value = ''
        details.value = ''
      }}>
        <h3 className="title is-3 has-text-primary">Add new todo</h3>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" ref={node => {
              name = node
            }} />
          </div>
        </div>

        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select>
                <option value="bug">Bug</option>
                <option value="task">Task</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Details</label>
          <div className="control">
            <textarea className="textarea" ref={node => {
              details = node
            }}></textarea>
          </div>
        </div>

        <div className="control">
          <button className="button is-primary" type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo