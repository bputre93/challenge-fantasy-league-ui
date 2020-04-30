import React from 'react';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => (
    <header>
        <NavLink to='/' exact={true}>Home</NavLink>
        <NavLink to='/teams' exact={true}>Teams</NavLink>
        <NavLink to='/stats' exact={true}>Statistics</NavLink>
        <NavLink to='/scoring' exact={true}>Scoring</NavLink>
    </header>
)

export default toolbar;