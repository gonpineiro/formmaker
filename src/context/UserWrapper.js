import React, { useState } from "react";
import { crearState } from "./initialsState";

export const CreateContext = React.createContext(null);

export const Create = ({ children }) => {

    const [a, setStore] = useState({ ...crearState });

    const actions = {
        setFormulario: (data) => setStore({ ...store, formulario: data }),
        setKeyTab: (keyTab) => setStore({ ...store, keyTab }),
        setLoadingSubmit: (loadingSubmit) => setStore({ ...store, loadingSubmit }),
        setPreview: (preview) => setStore({ ...store, preview }),
        setFileSizeAllowed: (bool) => setStore({ ...store, fileSizeAllowed: bool }),

        setError: (error) => setStore({ ...store, data: null, error, loading: false }),
        setLoading: (bool) => setStore({ ...store, loading: bool }),

        /* Dat | */
        getPerfil: () => store.data?.datosUsuario.datosPersonales,
        getToken: () => store.data?.datosUsuario.securityToken,
    }

    return (
        <CreateContext.Provider value={{ store, actions, loading: store.loading }}>
            {children}
        </CreateContext.Provider>
    );
}