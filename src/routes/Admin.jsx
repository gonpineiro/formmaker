import { Route } from "react-router-dom";
import { Menu, Crear, Gestionar } from "../screens";

const AdminRoute = () => {
  return (
    <>
      <Route exact path="/apps/formulario/menu" component={Menu} />
      <Route exact path="/apps/formulario/crear" component={Crear} />
      <Route exact path="/apps/formulario/gestionar" component={Gestionar} />
      <Route component={Menu} />
    </>
  );
};

export default AdminRoute;
