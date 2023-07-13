import axios from "axios";
import {loginStart, loginSuccess, loginFailure, logOut} from "./AuthActions"
import { toast  } from 'react-toastify';

export const LoginCall = async(user,dispatch) =>{

    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:8800/api/auth/login",user);
        if(res.data.error){
            toast(res.data.error);
        }

        else{
            dispatch(loginSuccess(res.data));
        }
    }

    catch(err){
        dispatch(loginFailure());
    }
}

export const logout = (dispatch) =>{
    dispatch(logOut());
}