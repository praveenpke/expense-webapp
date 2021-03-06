import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) =>(

    <header>
        
        <div className="header">
            <div className="content-container">

                <div className="header__content">
                    <Link className="header__title" to="/Dashboard"><h1>Expensify</h1></Link>
                    
                    <button className="button--link" onClick={startLogout}>Log out</button>
            
                </div>
            </div>
        </div>
    </header>
);
    
const mapDispatchToProps = (dispatch)=>({
    startLogout:()=>dispatch(startLogout())
})
 export default connect(undefined,mapDispatchToProps)(Header);

 