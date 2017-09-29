import * as ActionTypes from "./../actions/types"
import {heroList} from "./heroList"

{
  l(`
Reducers is function with two param (state, action) and final return value(state) to update single state object
And Reducers function should be pure function, it shouldn't impact previous state object 
`);
}


let initStore = {
  heros:[
    {
      id:1,
      name:"Hulk",
      power:'strong and Jump'
    },
    {
      id:2,
      name:"Spider man",
      power:'Fly and Crumb'
    },
    {
      id:3,
      name:"Super man",
      power:'super Fly'
    },
    {
      id:4,
      name:"Ant man",
      power:'so tint'
    },
    {
      id:5,
      name:"Rock man",
      power:'power of Strong'
    }
  ],
  viewMode:ActionTypes.VIEW_TYPES.LIST
}
export default function (state=initStore, action) {
  console.log('reducers', action);
  switch (action.type){
    case ActionTypes.ADD_HERO :
      return {...state ,heros:heroList(state, action)}
      break;
    case ActionTypes.UPDATE_HERO :
      console.log('ActionTypes.UPDATE_HERO ', heroList(state, action))
      return {...state ,heros:heroList(state, action)}
      break;
    case ActionTypes.HERO_SELECTION :
      return  Object.assign({},state,{heroSelection: action.hero});
      break;
    case ActionTypes.UPDATE_VIEW_MODE :
      return  Object.assign({},state,{viewMode:action.mode});
      break;
  }
  return state;
}