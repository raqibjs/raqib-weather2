import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Main from './components/Main'; // Our custom react component
import Weather from './components/Weather'; // Our custom react component
import About from './components/About'; // Our custom react component
import Examples from './components/Examples'; // Our custom react component

//importing foundation styles
import 'foundation-sites/dist/css/foundation.min.css';

//Start foundation js
$(document).foundation();

import './app.scss';

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Weather} />
                <Route path="/about" component={About} />
                <Route path="/examples" component={Examples} />
            </Route>
        </Router>
    )

}

render(<App/>, document.getElementById('app'));