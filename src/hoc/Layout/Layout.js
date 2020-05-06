import React, { Component } from 'react';
import './Layout.css'
import Aux from '../Aux';
import Toolbar from '../../components/Toolbar/Toolbar'
class Layout extends Component {

    render(){
        return (
            <Aux>
                <Toolbar/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;