import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

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
        <label>
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
      </form>
    );
  }
}

ReactDOM.render(
    <FlavorForm />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
