import React, { Component } from 'react';

class Posts extends Component {
    /* 컴포넌트 생성시 */
    /* 생명주기순서 : constructor(생성자) -> componentWillMount -> render */
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        fetch('http://127.0.0.1:65119/color_scheme/')
            .then(res => res.json())
            .then(data => console.log(data));
            // .then(data => this.setState({
            //     posts: data
            // }));
    }
    // render() {
    //     const { posts } = this.state;
    //     const postsList = posts.map((post) => (
    //         <div key={post.id} id={post.id}>
    //             <h4>{post.title}</h4>
    //             <h4>{post.body}</h4>
    //         </div>
    //     ));
    //     return (
    //         <div>
    //             {postsList}
    //         </div>
    //     );
    // }
    render() {
        return (
            <div>
                Posts.js를 App.js에 보이도록 이동
            </div>
        );
    }
}
export default Posts;