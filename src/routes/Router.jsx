import { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  Menu,
  Crear,
  Comprobar,
  Gestionar,
  Formulario,
  MenuForm,
} from "../screens";

import * as userAction from "../redux/actions/userAction";
import RouterLayout from "./RouterLayout";

const Router = ({ traerDatosSession, userReducer }) => {
  const { isAdmin, error, loading } = userReducer;

  useEffect(() => {
    traerDatosSession();
  }, [traerDatosSession]);

  if (loading) return "Loading";

  if (error) return error;
  console.log(isAdmin);
  if (isAdmin) {
    return (
      <RouterLayout>
        <Route exact path="/apps/formmaker/menu" component={Menu} />
        <Route exact path="/apps/formmaker/crear" component={Crear} />
        <Route exact path="/apps/formmaker/gestionar" component={Gestionar} />
        <Route exact path="/apps/formmaker/comprobar" component={Comprobar} />
        <Route component={Menu} />
      </RouterLayout>
    );
  }

  return (
    <RouterLayout>
      <Route exact path="/apps/formmaker/" component={MenuForm} />
      <Route exact path="/apps/formulario/:idForm" component={Formulario} />
      <Route component={Formulario} />
    </RouterLayout>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

export default connect(mapStateToProps, userAction)(Router);
