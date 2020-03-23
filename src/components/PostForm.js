import React from "react";
import {connect} from 'react-redux';
import {Animated} from "react-animated-css";

import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";


class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
  }

  submitHandler = event => {
    event.preventDefault();

    const {title, body} = this.state;

    if (!title.trim() || !body.trim()) {
      return this.props.showAlert("Название поста не может быть пустым");
    }

    const newPost = {
      title, body, id: Date.now().toString()
    }

    this.props.createPost(newPost);
    this.setState({title: '', body: ''})
  }

  changeInputHandler = event => {
    event.persist();
    this.setState( prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="mb-5">
        { this.props.alert &&
        <Animated>
          <Alert text={this.props.alert} />
        </Animated>
        }

        <div className="form-group">
          <label htmlFor="title" className="h3">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}/>
        </div>
        <div className="form-group">
          <textarea
            name="body"
            id="body"
            onChange={this.changeInputHandler}
            value={this.state.body}
            cols="30" rows="4" placeholder="Post's text"
            className="form-control mt-4"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Создать</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost, showAlert
}

const mapStateToProps = state => ({
  alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);