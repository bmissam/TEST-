import React, { Component } from 'react';
import axios from 'axios'
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments :[] , 
            post:[]

            
         }
    }
    componentDidMount = () => {
        let postId=this.props.postId
        let id=this.props.id
         console.log(this.id)

          axios.get('https://jsonplaceholder.typicode.com/comments?postId='+postId).then(res => this.setState({ comments: res.data })).catch(err => console.log("erreur"))
          axios.get('https://jsonplaceholder.typicode.com/posts?userId='+id).then(res => this.setState({ post: res.data })).catch(err => console.log("erreur"))      }
    render() { 
 
        return (  
        //   <div key={Math.random()}>
        //   {this.state.post.map(el=> 
        //   <div >
        //     <p>{el.body}</p>
        //   {  console.log(this.state.post)}
        //  </div>)}

        < div className="total-div">
       
            
              {this.state.comments.map(el =>
                <div className="comments" key={el.postId}>
             <div className='identifier'>
               <img width="40px" className="pic" src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png" alt="Card image cap" />
             <p className="identifier-name" >{el.name}</p> <span>{el.email}</span>
                
             </div>
                  
                  <p className="identifier-txt">{el.body}</p>
                  
                </div>
              )
              }
      
              
      </div>
      // </div>
        );
    }
}
 
export default Comments