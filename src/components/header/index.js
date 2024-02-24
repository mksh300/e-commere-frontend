import React from "react"
import Dropdown from "../dropdown"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleDropdown = (value) => {
        if(value === "cart"){
            navigate("/cart");
        }
        if(value === "home"){
            navigate("/");
        }
    }

    return (<div className="header-container">
        <Dropdown
            defaultName="Profile"
            options={["home","cart"]}
            onSelect={handleDropdown} />
    </div>)
}

export default Header