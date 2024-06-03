import React, { useState } from 'react';
import { MdDashboard, MdPeople, MdStore, MdFeedback } from 'react-icons/md';
import Logo from "../images/logo.png"
import { Link } from 'react-router-dom';


const Sidebar = ({selectedItem}) => {
    // const [selectedItem, setSelectedItem] = useState('Dashboard');

    const handleItemClick = (item) => {
        // setSelectedItem(item);
    };

    return (
        <div className="d-flex vh-100 flex-column p-3 bg-dark text-white" style={{ width: '250px' }}>
            <div className="mb-4 mr-2 d-flex justify-content-center align-items-center">
                <img src={Logo} alt="Logo" className="img-fluid" width={70} />
                <h2 className="ms-2">SmartBuy</h2>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item mb-3">
                    <Link 
                        to="/dashboard" 
                        className={`nav-link d-flex align-items-center ${selectedItem === 'Dashboard' ? 'bg-white text-dark' : 'text-white'}`}
                        onClick={() => handleItemClick('Dashboard')}
                    >
                        <MdDashboard size={30} className="me-2" />
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link
                        to="/users" 
                        className={`nav-link d-flex align-items-center ${selectedItem === 'Users' ? 'bg-white text-dark' : 'text-white'}`}
                        onClick={() => handleItemClick('Users')}
                    >
                        <MdPeople size={30} className="me-2" />
                        Users
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link 
                        to="/products" 
                        className={`nav-link d-flex align-items-center ${selectedItem === 'Products' ? 'bg-white text-dark' : 'text-white'}`}
                        onClick={() => handleItemClick('Products')}
                    >
                        <MdStore size={30} className="me-2" />
                        Products
                    </Link>
                </li>
                <li className="nav-item mb-3">
                    <Link 
                        to="/feedback" 
                        className={`nav-link d-flex align-items-center ${selectedItem === 'Feedback' ? 'bg-white text-dark' : 'text-white'}`}
                        onClick={() => handleItemClick('Feedback')}
                    >
                        <MdFeedback size={30} className="me-2" />
                        Feedback
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
