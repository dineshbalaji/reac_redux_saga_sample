// Dynamic App example
// https://github.com/ReactTraining/react-router/tree/master/examples/huge-apps
/*import App from "./../components/app"
import HeroList from "./../components/hero-list"
import HeroDetails from "./../components/hero-details"
export const rootConfig = {
  path:"/",
  component:App,
  indexRoute:{
    component:HeroList
  },
  onEnter:(nxtState, replace,callback) => {
    /!*
    * nxtState - state info send form Link tag
    * replace - history replace method
    * callback - it's like promise.reslove, untill we call 'callback', routing hold the process
    * *!/
    callback();
  },
  childRoutes:[
    {
      path:"edit/:id",
      component:HeroDetails
    }
  ]
}*/
/*
*  Dynamic routing
* */
export const rootConfig = {
  path:"/",
  getComponent:(nxtState, cb)=>{
    require.ensure([],()=>{
      /*
      * callback 1st param -> error info
      * 2nd param -> component
      * */
      var component = require('./../components/app');
      cb(null,component.default);
    })
  },
  getIndexRoute:(nxtState,cb) => {
    cb(null,{
      getComponent:(nxtState,cb) => {
        require.ensure([],() => {
          let component = require('./../components/hero-list');
          cb(null, component.default);
        });
      }
    });
  },
  getChildRoutes:(nxtState, cb) => {
   require.ensure([],()=>{
     var heroDetails = require("./hero-details");
     console.log('heroDetails', heroDetails);
     cb(null, [heroDetails.route])
   })
  }
}