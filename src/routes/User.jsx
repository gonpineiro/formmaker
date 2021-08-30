import { Route } from "react-router-dom";
import { Formulario } from "../screens";

const UserRoute = () => (
  <>
    <Route exact path="/apps/formulario/" component={Formulario} />
  </>
);

export default UserRoute;
