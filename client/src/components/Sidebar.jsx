import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <motion.div
            initial={{ x: "-100%" }} // Start hidden off-screen
            animate={{ x: isOpen ? "0%" : "-100%" }} // Slide in/out
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg z-50"
        >
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Dashboard</h2>
                <button onClick={toggleSidebar} className="text-xl">
                    <AiOutlineClose />
                </button>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-4">
                <h3 className="font-bold">Current</h3>
                <p className="text-gray-600">Winter 2025</p>
                <ul className="space-y-2">
                    <li>Something 1</li>
                    <li>Something 2</li>
                    <li>Something 3</li>
                </ul>
                <button className="text-gray-500 mt-2 flex items-center">
                    ➕ Add course
                </button>

                <h3 className="font-bold mt-4">Past</h3>
                <p className="text-gray-600">Fall 2024</p>
                <ul className="space-y-2">
                    <li>🔵 Computer Science 1026</li>
                    <li>🔴 Calculus 1000</li>
                </ul>
                <button className="text-gray-500 mt-2 flex items-center">
                    ➕ Add course
                </button>
            </div>
        </motion.div>
    );
};

export default Sidebar;
