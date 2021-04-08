import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listenAuthState } from './reducks/users/operations';
import { getIsSignedIn } from './reducks/users/selectors';

const Auth = ({children}) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const isSignedIn = getIsSignedIn(selector);

    useEffect(() => {
        console.log('from Auth');
        console.log(isSignedIn);
        console.log(selector);
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, []);

    if (!isSignedIn) {
        return <></>
    } else {
        return children;
    }

}

export default Auth;