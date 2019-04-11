import React, { Component } from 'react';
import SideNav from './sideNav';
class MainBody extends Component {
    state = {
        pName:"",
        pHolder:"Enter the Project Name",
        pClear:'',
        ipValues:'',
        bValue:"Set Name",
        count:'0'
    };
    mbio={
        //Height:'650px',
        marginTop:'150px',
        color:'#ffffff'
    };
    constructor()
    {
        super();
        this.valueChanger=this.valueChanger.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.valueTesting=this.valueTesting.bind(this);
    }
    valueChanger(event)
    {
        //console.log("Checking the working",this);
        if(this.state.count==0){
        this.setState({pHolder:'Enter the IP addresses seperated by ,'});
        document.getElementById("input1").value="";
        this.setState({bValue:'Set I.P Addresses'});
        this.setState({count:'1'});
        }       
        if(this.state.count==1)
        {
            
            //alert("Working");
        }

    }
    handleChange(event)
    {
        if(this.state.count==0){
        this.setState({pName:event.target.value});}
        if(this.state.count==1  ){
        this.setState({ipValues:event.target.value});}
    }
    handleSubmit(event)
    {
        //alert("project name is", this.state.pName);
        event.preventDefault();
    }
    valueTesting()
    {
        document.getElementById("testing").innerHTML=this.state.pName;
        document.getElementById("testing1").innerHTML=this.state.ipValues;
    }
    render() { 
        return (

                        <div className="row" style={this.mbio}>
                            
                            <div className="col-sm-3" >

                            </div>
                            <div className="col-sm-4" style={{marginTop:'140px',marginLeft:'70px'}}>
                                <form onSubmit={this.handleSubmit}>
                                    <input placeholder={this.state.pHolder} id="input1" onChange={this.handleChange} style={{color:'#ffffff'}}></input>
                                    <br></br>
                                    <br></br>
                                    <center> <button onClick={this.valueChanger} className="btn btn-success" type="submit" value="submit">{this.state.bValue}</button></center>
                                    <br></br>
                                    <center><button onClick={this.valueTesting} className="btn btn-primary">Show All Data</button></center>
                                </form>
                            </div>
                            <div className="col-sm-4">
                            <p id="testing" value={this.state.pName}></p>
                            <p id="testing1" value={this.state.pName}></p>
                            </div>
                            
                        </div>
                        
                
                
        );
    }

}
export default MainBody;