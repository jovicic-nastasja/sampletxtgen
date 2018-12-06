import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './Components/output';
import Select from './Components/Controls/select';
import Text from './Components/Controls/text';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      paras: 4,
      format: 'html',
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras='+this.state.paras+'&format='+this.state.format)
    .then((response) => {
      this.setState({text: response.data}, function(){
        console.log(this.state);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  showHTML(x){
    this.setState({format: x}, this.getSampleText);
  }

  changeParas(number){
    this.setState({paras: number}, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
      <h1 className="text-center">ReactJS Lorem Ipsum Text Generator</h1>
      <hr className="progress-bar bg-success"/>
      <form className="form-inline">
      <div className="form-group">
          <label>Number of paragraphs:</label>
          <Text value={this.state.paras} onChange={this.changeParas.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Include HTML format:</label>
          <Select value={this.state.html} onChange={this.showHTML.bind(this)}/>
        </div>
      </form>
      <br/><br/>
       <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
