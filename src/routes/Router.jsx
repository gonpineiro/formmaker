import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Main, Layout } from "../components";

import { getUserData } from "../utils";

const Router = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    getUserData().then(({ data }) => {
      setUserData(data);
    });
  }, []);
  console.log(userData);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/apps/totems" component={Main} />
          <Route component={Main} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
