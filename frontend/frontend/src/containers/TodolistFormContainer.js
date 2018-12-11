import React from 'react'
import TodolistFormTile from '../components/TodolistFormTile'

class TodolistFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.addTodolist = this.addTodolist.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearForm(){
    this.setState({
      title: '',
      body: ''
    })
  }

  addTodolist(payload, requestType, todolistId){
    let request = requestType.toUpperCase()
    fetch(`http://127.0.0.1:8000/api/${todolistId}`, {
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
      method: request,
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        title: res.title,
        body: res.body
      })
    })
  }

  handleSubmit(requestType, todolistId){
    let payload = {
      title: this.state.title,
      body: this.state.body
    }
    this.addTodolist(payload, requestType, todolistId)
    this.clearForm()
  }

  render(){
    return(
      <form onSubmit={() =>
        this.handleSubmit(
          this.props.requestType,
          this.props.todolistId
        )}
      >
        <TodolistFormTile
          name="title"
          label="Title"
          content={this.state.title}
          handlerFunction={this.handleChange}
        />
        <TodolistFormTile
          name="body"
          label="Body"
          content={this.state.body}
          handlerFunction={this.handleChange}
        />
        <button type='submit' value='Submit'>{this.props.btn}</button>
      </form>
    )
  }
}

export default TodolistFormContainer;
