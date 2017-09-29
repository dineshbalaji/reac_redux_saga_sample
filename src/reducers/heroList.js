import * as ActionTypes from "./../actions/types"

export const heroList = (state=[], action) =>{
  switch (action.type){
    case ActionTypes.ADD_HERO :
      return [
        ...state.heros,
        action.hero
      ]
      break;
    case ActionTypes.UPDATE_HERO :
      return state.heros.map((hero) => {
        return (hero.id == action.hero.id) ? action.hero : hero;
      })
      break;
  }
  return state;
}