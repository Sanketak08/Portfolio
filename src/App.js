import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/education' component={Education} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={ContactMe} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
