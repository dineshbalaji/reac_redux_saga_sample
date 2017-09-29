import React from "react";
import {connect} from "react-redux";
import {updateHero} from "./../actions"
import {browserHistory} from "react-router"

@connect((state, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    heros:state.heros,
    heroId:ownProps.routeParams.id
  }
},{
  updateHero
})
export default class HeroDetails extends React.Component {
  
  constructor(props){
    super(props)
  }
  
  updateHeroInfo() {
    this.props.updateHero({id:this.props.heroId, name:this.heroName.value, power: this.heroPower.value});
    browserHistory.push("/");
  }
  
  render(){
    var {nameChangeEvent, powerChangeEvent} =this.props;
    var {heros,heroId} = this.props;
    var hero = (heros.filter((hero)=>{
      return hero.id == heroId
    }))[0];
    
    return (
      <section>
        <div><label>id:</label> {hero.id}</div>
        <div><label htmlFor="name">name</label> : <input id="name" type="text" defaultValue={hero.name} ref={(elem)=> { this.heroName = elem}} /> </div>
        <div><label htmlFor="power">power</label> : <input id="power" type="text" defaultValue={hero.power} ref={(elem) => this.heroPower = elem} /> </div>
        <button onClick={::this.updateHeroInfo}>SAVE</button>
      </section>
    )
  }
}