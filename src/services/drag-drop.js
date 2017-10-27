import { moveTodo } from '../actions'

export function allowDrop(ev) {
    ev.preventDefault()
}

export let drag = (todo) => {
    return ev => {
        ev.dataTransfer.setData("text", todo)
    }
}

export let drop = (status, onMove) => {
    return ev => {
        ev.preventDefault()
        onMove(moveTodo(ev.dataTransfer.getData('text'), status))
    }
}