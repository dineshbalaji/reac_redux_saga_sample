import {createStore} from "redux";
import reducers from "./reducers"
import * as Actions from "./actions/"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {Router, browserHistory, Route} from "react-router";
import {rootConfig} from "./routes"
import App from  "./components/app"

// You should import react if your using JSX (implicit: React.createElement)
import React from "react";

let store = createStore(reducers);

{
  l(` Store have 3 inbuild method
  1. store.getState() ->  return state object from last reducer output`);
  l(store.getState());
  
  l('2. store.subscribe(listenerFn):unSubscribeFn');
  store.subscribe(()=> {
    l('listen for every state object changes', store.getState());
  });
  
  l(`3. store.dispatch(action)
   action - which is used for reducer input to change current state of Object
  `);
  var result = store.dispatch(Actions.addHero({id:0,name: 'dinesh', power: 'react ;)'}));
  
  console.log('result');
  console.log(result);
}
{
  l(`
    Provider is react-redux element to serve store to his children 
`)
}
console.log(rootConfig);
render(
  <Provider store={store}>
    <Router routes={rootConfig} history={browserHistory}>
      {/*<Route path="/" component={App}></Route>*/}
    </Router>
  </Provider>
  , document.getElementById('container'));