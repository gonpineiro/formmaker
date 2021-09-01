import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { Layout } from "../screens";

import AdminRoute from "./Admin";
import UserRoute from "./User";

import * as userAction from "../redux/actions/userAction";
import { useEffect } from "react";

const Router = ({ traerDatosSession, userReducer }) => {
  const { isAdmin, error, loading } = userReducer;

  useEffect(() => {
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
