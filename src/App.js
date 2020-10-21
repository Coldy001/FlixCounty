import React from "react";

import GenresPage from "./components/GenresPage";
import DetailsPage from "./components/DetailsPage";
import SearchPage from "./components/SearchPage";
import HomePage from "./components/HomePage";
import SimRec from "./components/Details/SimRec";
import Footer from "./components/footer/Footer";

import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                    <Footer />
                </Route>
                <Route path="/search/:value">
                    <SearchPage />
                    <Footer />
                </Route>
                <Route path="/sim-rec/:value/:id" component={SimRec} />
                <Route path="/details/:id">
                    <DetailsPage />
                    <Footer />
                </Route>
                <Route path="/genres">
                    <GenresPage />
                    <Footer />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
