import { BrowserRouter, Switch } from "react-router-dom";
import { Layout } from "../screens";

const RouterLayout = ({ children }) => (
  <BrowserRouter>
    <Layout>
      <Switch>{children}</Switch>
    </Layout>
  </BrowserRouter>
);

export default RouterLayout;
