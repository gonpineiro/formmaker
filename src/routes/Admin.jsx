import { Route } from "react-router-dom";
import { Menu, Crear } from "../screens";

const AdminRoute = () => (
  <>
    <Route exact path="/apps/formulario" component={Menu} />
    <Route exact path="/apps/formulario/crear" component={Crear} />
    <Route component={Menu} />
  </>
);

export default AdminRoute;
