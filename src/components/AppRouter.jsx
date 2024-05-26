import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {privateRoutes} from "../router";


const AppRouter = () => {

    return (

        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            )}
        </Routes>)

};

export default AppRouter;
