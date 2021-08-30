import { Route } from "react-router-dom";
import { Formulario } from "../screens";

const Main = () => <h2>No es admin</h2>;

const UserRoute = () => (
  <>
    <Route exact path="/apps/formulario/" component={Formulario} />
    <Route component={Formulario} />
  </>
);

export default UserRoute;
