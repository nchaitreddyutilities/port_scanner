import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './components/sideNav';
import MainBody from './components/mainBody';

class App extends Component { 
    mbStyling={
        //minHeight:'660px',
        backgroundColor:'#101010',
        //overflow:'hidden'

    };
    snStyling={
        //minHeight:'650px',
        backgroundColor:'black',
        //overflow:'hidden'
    };
    hbissue={
        //overflow:'hidden',
        minHeight:'650px'
            };
  render() {
    return (
      <div className="row" style={this.hbissue}>
        <div className="col-sm-2" style={this.snStyling}>
          <SideNav />
        </div>
        <div className="col-sm-10" style={this.mbStyling}>
          <MainBody />
        </div>
      </div>
    );
  }
}

export default App;
