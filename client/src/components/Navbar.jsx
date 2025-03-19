import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import "./Navbar.css"; // Keep your CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <button className="menu-btn" onClick={toggleSidebar}>
                        {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                    </button>
                    <Link to="/" className="nav-title">Home</Link>
                </div>
                <div className="nav-right">
                    <button className="home-icon">
                        <HomeIcon fontSize="large" />
                    </button>
                </div>
            </nav>

            {/* Sliding Sidebar */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="sidebar"
            >
                <ul>
                    <li><Link to="/">Dashboard</Link></li>
                </ul>
            </motion.div>
        </>
    );
};

export default Navbar;
