import { Route } from "react-router-dom";
import { Menu } from "../screens";

const AdminRoute = () => (
  <>
    <Route exact path="/apps/totems" component={Menu} />
    <Route component={Menu} />
  </>
);

export default AdminRoute;
