import React from 'react';
import {connect} from 'react-redux';
{
  l(`
 "ref" attribute in React, used for get reference DOM / component instance.
 ref have callback function and send reference DOM as 1st argument of function.
 this function call twice on react update because 1st time for component destroy (null argument) and 2nd created DOM
`)
}

@connect((state,ownProps)=>({
  viewMode:state.viewMode
}), null)
export default class App extends React.Component {
  txtChange(){
    console.log(this.txtBox);
  }
  render() {
    
      return (
        <TxtBox ref={r => {this.txtBox = r}} update={::this.txtChange}></TxtBox>
      );
  }
}
class TxtBox extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Sample'
  }
  render(){
    return ( <div><input id="name" type="text" onChange={::this.props.update} /><label htmlFor="name"></label></div>)
  }
}


/*
export const App = () => {

  return (<div>
    <HeroList></HeroList>
    <HeroDetails></HeroDetails>
  </div>);
}*/
