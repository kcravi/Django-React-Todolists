import React from 'react'
import TodolistShowTile from "../components/TodolistShowTile"
import TodolistFormContainer from "./TodolistFormContainer"

class TodolistShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todolist: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    fetch(`http://127.0.0.1:8000/api/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(res => {
      this.setState({todolist: res})
    })
  }

  handleDelete(event){
    fetch(`http://127.0.0.1:8000/api/${this.props.match.params.id}`, {
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
      method: 'DELETE'
    })
    .then(response => this.props.history.push('/'))
  }

  render() {
    return (
      <div>
        <h1> Detailed ToDo-Lists </h1>
        <TodolistShowTile
          key={this.state.todolist.id}
          title={this.state.todolist.title}
          body={this.state.todolist.body}
          created_at={this.state.todolist.created_at}
        />
        <br/>
        <hr/>
        <h3> Update Todolist </h3>
        <TodolistFormContainer
          requestType='put'
          todolistId={this.state.todolist.id + '/'}
          btn="Update Todolist"
        />
        <button type="submit" value="submit" onClick={this.handleDelete}> Delete Todolist </button>
      </div>
    )
  }
}

export default TodolistShowContainer
