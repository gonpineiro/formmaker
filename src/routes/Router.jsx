import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Main, Layout } from "../components";

import * as userAction from "../redux/actions/userAction";

const Router = ({ traerDatosSession, userReducer }) => {
  useEffect(() => {
    traerDatosSession();
  }, [traerDatosSession]);
  console.log(userReducer);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/apps/totems" component={Main} />
          <Route component={Main} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

export default connect(mapStateToProps, userAction)(Router);
