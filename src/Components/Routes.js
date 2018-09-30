import React from "react";
import { Route, Redirect } from "react-router-dom";
import firebase from "firebase";

export function PublicRoute({ component: Component, ...props }) {
  return <Route {...props} render={props => <Component {...props} />} />;
}

export function PrivateRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      // Checks to see if there is an authenticated user
      render={props =>
        firebase.auth().currentUser ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
      }
    />
  );
}

export function DynamicRoute({
  authedComponent: AuthedComponent,
  unauthedComponent: UnauthedComponent,
  ...props
}) {

  return (
    <Route
      {...props}
      // Renders page differently depending on if user is authenticated or not
      render={props =>
        firebase.auth().currentUser ? (
          <AuthedComponent {...props} />
        ) : (
            <UnauthedComponent {...props} />
          )
      }
    />
  );
}
