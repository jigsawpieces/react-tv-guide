import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import history from './history';

import Shows from "./components/Shows";
import Show from "./components/Show";

require("../stylesheets/main.css");

const app = document.getElementById('app');

ReactDOM.render(

	<BrowserRouter>
    <Switch>
	    <Route exact path="/" component={Shows}/>
	    <Route exact path="/show/:showId" name="show" component={Show}/>
    </Switch>
	</BrowserRouter>,

app);
