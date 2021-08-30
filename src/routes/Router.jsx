import { connect } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import { Layout } from "../screens";
import { useMount } from "../hooks";

import AdminRoute from "./Admin";
import UserRoute from "./User";

import * as userAction from "../redux/actions/userAction";

const Router = ({ traerDatosSession, userReducer: { userProfiles } }) => {
  useMount(traerDatosSession);

  if (!userProfiles) return "loading";

  const isAdmin = userProfiles === "3" ? true : false;

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
