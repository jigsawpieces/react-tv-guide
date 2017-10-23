import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Show from "./components/Show";

require("../stylesheets/main.scss");

const app = document.getElementById('app');

ReactDOM.render(

	<BrowserRouter>
    <Switch>
	    <Route exact path="/" component={Home}/>
	    <Route exact path="/show/:showId" name="show" component={Show}/>
    </Switch>
	</BrowserRouter>,

app);
