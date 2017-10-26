import React from 'react'
import { Link } from 'react-router-dom'


const Details = ({_id, name, type, status, details}) => (
    <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><Link to={`/`}>Main</Link></li>
                <li className="is-active"><a aria-current="page">Details</a></li>
            </ul>
        </nav>

        <form className="detailsForm">
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" defaultValue={name} />
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
                <label className="label">Status</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option value="todo">Todo</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Details</label>
                <div className="control">
                    <textarea className="textarea" defaultValue={details}></textarea>
                </div>
            </div>

            <div className="control">
                <button className="button is-primary" type="submit">Save</button>
            </div>
        </form>
    </div>
    

)




export default Details