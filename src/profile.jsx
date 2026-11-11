import { useContext } from "react";
import MyNavbar from "./navbar"
import './profile.css'
import { UserContext } from "./UseContext";


function Profile(){

    const {user}=useContext(UserContext);

    return(
        <>
        <MyNavbar/>
        <div className="continer">
            <div className="cont">
                <h4>User Profile</h4>
                <div className="det">
                    <h6>Name: {user?.fullname}</h6>
                    <h6>Username: {user?.username}</h6>
                    <h6>Email: {user?.email}</h6>
                    <h6>Phone: {user?.phone}</h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile