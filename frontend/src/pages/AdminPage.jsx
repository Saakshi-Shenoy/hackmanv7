import React from "react";
import "../App.css";
import AdminControl from "../components/Admin/AdminControl";

const AdminPage = () => {
    return(
        <div>
            <div className="background-scroll"></div>
            <div className="content">
              <AdminControl />
            </div>
        </div>
    )
};

export default AdminPage;