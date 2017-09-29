import React from "react"
import {render} from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux";
import {Redirect,Router,Route,browserHistory, Link, IndexRoute} from "react-router";

/*
* browserHistory help to navigate different state and more
* */
//browserHistory.push("/home");

/*
*  Reducer
* */
let reducer =(state={},action) => {
  return state;
}

/*
*  Create Store
* */
let store = createStore(reducer);
  
let Links = () => {
  return (<div>
    <a href="/home">Home</a> &nbsp;
    <Link activeClassName="btn-active" to="/about" id="link1" >About</Link> &nbsp;s
    <Link to="/">APP</Link>
  </div>)
}
let App = (props) => {
  return <div>
    <h1>APP</h1>
    <Links></Links>
    <div>{props.children}</div>
  </div>
}
let AppCxt = (props) => {
  return <div>
    <p>app content</p>
  </div>
}

let Home = (props) => {
  return <div>
    <h1>Home</h1>
    <div>{props.children}</div>
    
  </div>
}

let About = (props) => {
  return <div>
    <h3>About</h3>
  </div>
}


/*
*  / -> /home (root will redirect to home page)
*  Browser Display
 *  --------------
  * Home
* */
let Ex1 = () => (
  <Router history={browserHistory}>
    <Redirect from="/" to="/home" ></Redirect>
    <Route path="/home" component={Home}></Route>
  </Router>
);

let ex1Config = {
  childRoutes:[{
    path:"/",
    onEnter:(nxtState, replace)=>{
      replace("/home")
    }},
    {
      path:"/home",
      component:Home
    }
  ]
}


/*
 *  Route tag without path attribute called pathless routing
 *  display like Home wrap  inside APP tag
 *  Browser Display
  *  --------------
  *  APP
 *  Home
 * */

let Ex2 = () => (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}></Route>
    </Route>
  </Router>
)
let routesEx2Config = {
  component:App,
  childRoutes:[
    {
      path:"/",
      component:Home
    }
  ]
}


let Ex3 = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AppCxt}></IndexRoute>
      <Route path="Home" component={Home}></Route>
      <Route path="about" component={About}/>
    </Route>
  </Router>
);


/* Above example can achieve via config JSON*/
let routesEx3Config = {
  path:"/",
  component:App,
  indexRoute:{component:AppCxt},
  childRoutes:[
    {
      path:"home",
      component:Home,
    },
    {
      path:"about",
      component:About,
    }
  ]
};



let ExConfig =({routes}) => {
  return <Router routes={routes} history={browserHistory}></Router>
}

render(<Provider store={store}>
  <ExConfig routes={ex1Config}></ExConfig>
x</Provider>, document.getElementById("container"));