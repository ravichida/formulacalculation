'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
    this.claculate = this.claculate.bind(this);
    this.state = {
      formula: {
        a: '',
        b: '',
        c: ''
      }
    }

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className='col-xl-12'>
            <h5>Formulas App</h5>
          </div>
        </div>
        <div className="row">
          <div className='col-xl-12'>
            <h4>(a + b)<sup>2</sup> Formula</h4>
            <div class="div">
              <h4 className="green"><span> (a + b)<sup>2</sup></span> = <strong><span> a<sup>2</sup></span> + <span> b<sup>2</sup></span> + 2ab</strong></h4>
            </div>
            <h5>Submit values</h5>
            <div class="div">
              a = <input name="a" id="a" type="text" value={this.state.formula.a}
                onChange={(e) => { this.updateField("a", e); }}
                // onKeyUp={(e) => this.claculate()}
              />
            </div>
            <div class="div">
              b = <input name="b" id="b" type="text" value={this.state.formula.b}
                onChange={(e) => { this.updateField("b", e); }}
                // onKeyUp={(e) => this.claculate(e)}
              />
            </div>
            <div class="div">
              <input type="submit" className="p3" value="Claculate"
                onClick={(event) => this.claculate(event)}
              />
            </div>
            <div class="div">
            <strong><span> a<sup>2</sup></span> + <span> b<sup>2</sup></span> + 2ab = </strong>
              <input name="c" type="text" readOnly value={this.state.formula.c} id="c" />
            </div>
            <div class="div" id="d">
              a = {this.state.formula.a}<br />
              b = {this.state.formula.b}<br />
              c = {this.state.formula.c}<br />
            </div>
          </div>
        </div>
      </div>
    );
  }

  updateField = (name, event) => {
    event.preventDefault();
  
    this.setState({
      formula: {
        ...this.state.formula,
        [name]:event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }
    });
    // var c = ((a * a || 0) + (b * b || 0) + 2 * (a || 1) * (b || 1))  || '10';
  }

  claculate = (event) => {

    event.preventDefault();
    var a = parseInt(this.state.formula.a) || '';
    var b = parseInt(this.state.formula.b) || '';
    var c = a * a + 2 * a * b + b * b
    this.setState({
      formula: {
        a: a,
        b: b,
        c: c 
      }
    });
  }
  
}

export default App;
