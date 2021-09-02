import { Route } from "react-router-dom";
import { Formulario } from "../screens";

const UserRoute = () => {
  return (
    <>
      <Route exact path="/apps/formulario/" component={Formulario} />
      <Route component={Formulario} />
    </>
  );
};

export default UserRoute;
