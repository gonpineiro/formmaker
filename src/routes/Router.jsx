import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Main, Layout } from "../components";

const Router = () => {
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
