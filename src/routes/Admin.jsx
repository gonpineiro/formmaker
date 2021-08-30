import { Route } from "react-router-dom";
import { Menu, Crear, Gestionar } from "../screens";

const AdminRoute = () => (
  <>
    <Route exact path="/apps/formulario" component={Menu} />
    <Route exact path="/apps/formulario/crear" component={Crear} />
    <Route exact path="/apps/formulario/gestionar" component={Gestionar} />
  </>
);

export default AdminRoute;
