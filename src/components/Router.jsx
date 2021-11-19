import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";

const Router = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Landing} />
         </Switch>
      </BrowserRouter>
   )
}

export default Router;