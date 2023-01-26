import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import {
    Menu,
    Crear,
    Comprobar,
    Gestionar,
    Formulario,
    MenuForm,
    MenuCsv,
    DetalleForm,
    Resultados,
} from '../screens';

import * as userAction from '../redux/actions/userAction';
import RouterLayout from './RouterLayout';
import { Loading } from '../components';
import { CreateContext } from '../context/UserWrapper';

const Router = ({ traerDatosSession, userReducer }) => {
    const { isAdmin, error, loading, dniLoggedUser } = userReducer;

    useEffect(() => {
        traerDatosSession();
    }, [traerDatosSession]);

    if (loading) return <Loading />;

    if (error) return error;
    //console.log("hola");
    //console.log("dni: "+dniLoggedUser);
    if (isAdmin === 3 || isAdmin === '3') {
        //console.log("admin: "+isAdmin);
        return (
            <RouterLayout>
                <Route exact path="/apps/formmaker/menu" component={Menu} />
                <CreateContext>
                    <Route exact path="/apps/formmaker/crear" component={Crear} />
                </CreateContext>
                <Route exact path="/apps/formmaker/gestionar" component={Gestionar} />
                <Route exact path="/apps/formmaker/gestionar/:id" component={DetalleForm} />
                <Route exact path="/apps/formmaker/comprobar" component={Comprobar} />
                <Route exact path="/apps/formmaker/resultados" component={Resultados} />
                <Route component={Menu} />
            </RouterLayout>
        );
    }

    if (isAdmin === 2 || isAdmin === '2') {
        //console.log("admin: "+isAdmin);
        return (
            <RouterLayout>
                <Route exact path="/apps/formmaker/menu" component={MenuCsv} />
                <Route exact path="/apps/formmaker/resultados" component={Resultados} />
                <Route component={MenuCsv} />
            </RouterLayout>
        );
    }
    //console.log("admin: "+isAdmin);

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
