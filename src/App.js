import React from 'react';
import {AuthContext} from "./context";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <AuthContext.Provider value={{

        }}>
            <BrowserRouter>

                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;