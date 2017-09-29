import * as ActionTypes from "./types"

export const addHero = (hero) => ({
    type:ActionTypes.ADD_HERO,
    hero
});

export const updateHero = (hero) => ({
  type: ActionTypes.UPDATE_HERO,
  hero
});

export const updateViewMode =(mode) => ({
  type:ActionTypes.UPDATE_VIEW_MODE,
  mode
});

export const heroSelection =(hero) => ({
  type:ActionTypes.HERO_SELECTION,
  hero
});