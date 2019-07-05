import React, { Component } from 'react';

/* La idea de esta clase es recibir datos de un servidor externo */
class Posts extends Component {
    state = {
        posts: []
    }
    /* async await -> significa que tomará algo de tiempo de ejecutarse */
    /* componentDidMount() -> Se ejecuta cuando el componente ya ha sido cargado en pantalla */
    // res.json() -> Lo convierto a formato json
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json() 
        console.log(data)
        this.setState({posts: data})
    }

    render() { 
        return ( 
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
         );
    }
}
 
export default Posts;

