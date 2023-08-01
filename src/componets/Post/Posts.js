import React from "react";
import axios from "axios";

class Posts extends React.Component{


    state ={
        posts:[]
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                this.setState({posts: response.data})
            })
            .catch((error)=>{
                console.log('Error',error)
            })

    }

   render() {

       const { posts } = this.state;
       return (
           <div>
               <h2>Posts:</h2>
               <ul>
                   {posts.map((post) => (
                       <li key={post.id}>{post.title}</li>
                   ))}
               </ul>
           </div>
       );

}}





export default Posts