import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export default class App extends Component {
  render() {
    return (
        <View style={{marginLeft:90 ,width:"50%"}}>
          <Text style={{marginLeft:50,marginTop:50}}>My First App</Text>
        
          <GreenButton color="purple"/>
          <BlueButton/>
          <RedButton/>
          <YellowButton/>
       
          
        </View>
    );
  }
}
class GreenButton extends Component{
  displayAlert=()=>{
    alert("play sound s1") 
  }
  render(){
    return(

    <Button title = "s1" color={this.props.color} onPress={this.displayAlert}></Button>
    );
  }
}
class Green2Button extends Component{
  displayAlert=()=>{
    alert("Don't Punch Me.") 
  }
  render(){
    return(
    <View style={{marginTop:20}}>
    <Button title = "punch me" color="#2fdea9" onPress={this.displayAlert}></Button>
    </View>
    );
    
  }
}
class BlueButton extends Component{
  displayAlert=()=>{
    alert("play sound s2") 
  }
  render(){
    return(
      <View style={{marginTop:20,marginBottom:20}}>
    <Button title = "s2" color="blue" onPress={this.displayAlert}></Button>
    </View>
    );
  }
}
class RedButton extends Component{
  displayAlert=()=>{
    alert("play sound s3") 
  }
  render(){
    return(
      <View style={{marginBottom:20}}>
    <Button title = "s3" color="red" onPress={this.displayAlert}></Button>
    </View>
    );
    
  }
}
class YellowButton extends Component{
  displayAlert=()=>{
    alert("play sound s4") 
  }
  render(){
    return(
    <Button title = "s4" color="yellow" onPress={this.displayAlert}></Button>
    );
  }
}