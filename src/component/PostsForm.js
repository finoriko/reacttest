import React, { Component } from 'react';

class PostsForm extends Component {
  constructor(props){
    super(props);
    this.state={
      word:'',
      platform:'',
      a:1,
      b:1
    };
    this.onChange =this.onChange.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  render() {
    const {word,a,b,platform} = this.state;
    const {onChange} = this;
    return (
      <div>
        <h4>new Post</h4>
        <form action="">
          <div>
            <label>word:</label>
            <input type="text" name="word" value={word} onChange={onChange}/>
          </div>
          <div>
            <label>a:</label>
            <input type="value" name="a" value={a} onChange={onChange}/>
          </div>
          <div>
            <label>b:</label>
            <input type="value" name="b" value={b} onChange={onChange}/>
          </div>
          <div>
            <label>plaform:</label>
            <input type="text" name="platform" value={platform} onChange={onChange}/>
          </div>
          <div><button type="submit">전송</button></div>
        </form>
      </div>
    );
  }
}

export default PostsForm;