import { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { Formulario } from "../screens";

const UserRoute = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/apps/formulario");
  }, [history]);
  return (
    <>
      <Route exact path="/apps/formulario/" component={Formulario} />
    </>
  );
};

export default UserRoute;
