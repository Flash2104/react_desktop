import React, { Component, ReactElement, useEffect } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { ApplicationPaths, QueryParameterNames } from '../ApiAuthorizationConstants';

function AuthorizeRoute(props: any) {

    const state = {
        ready: false,
        authenticated: false
    }; // ToDO: get from state manager

    useEffect(() => {
        populateAuthenticationState();
        return () => unsubscribe();
    }, [])

    const populateAuthenticationState = async() => {
        // const authenticated = await authService.isAuthenticated();
        // this.setState({ ready: true, authenticated });
    }

    const authenticationChanged = async() => {
        // this.setState({ ready: false, authenticated: false });
        await populateAuthenticationState();
    };

    function unsubscribe(): void {

    }

    function getElement(): ReactElement {
        const { ready, authenticated } = state;
        var link = document.createElement("a");
        link.href = props.path || '';
        const returnUrl = `${link.protocol}//${link.host}${link.pathname}${link.search}${link.hash}`;
        const redirectUrl = `${ApplicationPaths.Login}?${QueryParameterNames.ReturnUrl}=${encodeURIComponent(returnUrl)}`
        if (!ready) {
            return <div></div>;
        } else {
            const { component, ...rest } = props;
            return <Route {...rest}
                render={(props: any) => {
                    if (authenticated) {
                        return <Component {...props} />
                    } else {
                        return <Navigate replace to={redirectUrl} />
                    }
                }} />
        }
    }
    
    return (
        <>
            { getElement() }
        </>
    );
  }
  
  export default AuthorizeRoute;