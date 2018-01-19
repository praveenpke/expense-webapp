import React from 'react';
import { connect} from 'react-redux';
import { startLogin } from '../actions/auth';

const Login = ({ startLogin })=>(
    <div>
        <button  onClick={startLogin}>Login with Google</button>
    </div>
);

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(Login);