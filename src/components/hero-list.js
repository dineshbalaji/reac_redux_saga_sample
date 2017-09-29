import React from "react";
import {connect} from "react-redux"
import  {Hero} from "./hero"
import {browserHistory} from "react-router"

@connect((state,ownProps)=>({
  heros: state.heros
}))
export default class HeroList extends React.Component {
  
  heroSelection(person) {
    browserHistory.push(`edit/${person.id}`);
  }
  render() {
    return (<div>
      {this.props.heros.map((hero,i) => (<Hero key={i} person={hero} onSelect={::this.heroSelection}></Hero>))}
    </div>);
  }
}