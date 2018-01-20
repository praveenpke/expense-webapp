import React from 'react';
import { connect} from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = ({ startLogin })=>(
    <div className='box-layout'>
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p className="box-layout__subtitle">Store your expenses to maintain your budget</p>
            <button  className ="box-layout__btn" onClick={startLogin}></button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(Login);