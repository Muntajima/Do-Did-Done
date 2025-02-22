import { useContext } from "react";
import { FaHome, FaNewspaper, FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Povider/AuthProvider";


const Dashboard = () => {
    const {  user } = useContext(AuthContext);
 
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-emerald-600">
                <ul className="menu p-4 text-white space-y-2">
                {
                    user ? 
                    <>
                    <div className="w-32"><img src={user.photoURL} alt="" /></div>
                    <li><NavLink to='/' className={({ isActive }) =>
                        isActive ? "text-emerald-300 font-bold" : ""
                    }><FaHome/> Home</NavLink></li>
                    <li><NavLink to='/dashboard/tasks' className={({ isActive }) =>
                                isActive ? "text-emerald-300 font-bold" : ""
                            }><FaUser></FaUser> All Tasks</NavLink></li>
                            <li><NavLink to='/dashboard/alluser' className={({ isActive }) =>
                                isActive ? "text-emerald-300 font-bold" : ""
                            }><FaUser></FaUser> Add Task</NavLink></li>
                            
                    </>
                     :
                    <></>
                }
                    
                </ul>
            </div>


            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;