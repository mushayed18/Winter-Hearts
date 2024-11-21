import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Pages/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(user && user?.email) {
        return children;
    }

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;