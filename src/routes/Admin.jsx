import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { Menu, Crear, Gestionar } from "../screens";

const AdminRoute = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/apps/formulario/menu");
  }, [history]);
  return (
    <>
      <Route exact path="/apps/formulario/menu" component={Menu} />
      <Route exact path="/apps/formulario/crear" component={Crear} />
      <Route exact path="/apps/formulario/gestionar" component={Gestionar} />
    </>
  );
};

export default AdminRoute;
