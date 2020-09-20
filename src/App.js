import React, { Component } from 'react';
import TOC from "./component/TOC"
import Posts from "./component/Posts"
import PostsForm from "./component/PostsForm"
class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    )
  }
}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('검색엔진' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>

        <label >
          검색엔진
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="google">google</option>
            <option value="bing">bing</option>
            <option value="behance">behance</option>
            <option value="instagram">instagram</option>
            <option value="pinterest">pinterest</option>
          </select>
        </label>
        <input type="submit" value="배색생성" />
        </div>
      </form>
    );
  }
}
class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
class Content extends Component{
  render(){
    return(
      <article>
        <h2>HTML</h2>
        HTML is HyperTextMarkup Language.
      </article>
    )
  }
}
// class TOC extends Component{
//   render(){
//     return(
//       <nav>
//         <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.html">CSS</a></li>
//           <li><a href="3.html">JavaScript</a></li>
//         </ul>
//       </nav>
//     )
//   }
// }

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostsForm />
        <Posts />
      </div>
  );
}

export default App;
