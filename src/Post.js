import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }
    componentDidMount = () => {
      let id=this.props.id
        axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id).then(res => this.setState({ post: res.data })).catch(err => console.log("erreur"))
        
    }
    render() {
        return (<div className="toutpost">
            {console.log(this.props.id)}

            {this.state.post.map(el =>
            <div className="Post">
                <img className="image" src="https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <Link id='link' to={`/Comments/${el.id}`}>
                <p className="PostTitle">{el.title} </p>
                </Link>
                <p className="PostBody">{el.body}</p>
                </div>
           )}

        </div>);
    }
}

export default Post;