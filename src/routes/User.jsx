import { Route } from "react-router-dom";

const Main = () => <h2>No es admin</h2>;

const UserRoute = () => (
  <>
    <Route exact path="/apps/totems" component={Main} />
    <Route component={Main} />
  </>
);

export default UserRoute;
