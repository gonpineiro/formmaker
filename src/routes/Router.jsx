import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { Layout } from "../screens";

import AdminRoute from "./Admin";
import UserRoute from "./User";

import * as userAction from "../redux/actions/userAction";
import { useEffect } from "react";
import { postData } from "../utils";

const Router = ({ traerDatosSession, userReducer }) => {
  const { isAdmin, error, loading } = userReducer;

  useEffect(() => {
    const data = {
      formulario:{
        id: 1,
        string: "esto es una formulario",
        estado: "nuevo"
      }
    }
    postData(data)
    traerDatosSession();
  }, [traerDatosSession]);

  if (loading) return "Loading";

  if (error) return error;

  return (
    <BrowserRouter>
      <Layout>
        <Switch>{isAdmin ? <AdminRoute /> : <UserRoute />}</Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

export default connect(mapStateToProps, userAction)(Router);
