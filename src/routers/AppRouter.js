import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';





const AppRouter = () =>(
    <BrowserRouter>
        <div><Header/>
            <Switch>
                <Route exact path="/" component ={Dashboard} />
                <Route path="/create" component ={AddExpense} />
                <Route path="/edit/:id" component ={EditExpense} />
                <Route path="/help" component ={Help} />
                <Route component ={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;