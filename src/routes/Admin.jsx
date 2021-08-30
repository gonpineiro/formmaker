import { Route } from "react-router-dom";
import { Main } from "../components";

const AdminRoute = () => (
  <>
    <Route exact path="/apps/totems" component={Main} />
    <Route component={Main} />
  </>
);

export default AdminRoute;
