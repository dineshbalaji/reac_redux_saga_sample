export const route = {
  path:"edit/:id",
  getComponent: (nxtState, cb) => {
    require.ensure([],()=> {
      let component = require("./../../components/hero-details")
      cb(null,component.default);
    });
  }
}
