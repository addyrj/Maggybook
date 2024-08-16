import React, { useState } from 'react';
import './style.scss';
import speaker from '../../assets/speaker.svg';
import Register from '../../Pages/register/Register';

const SubNavTwo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="home-nav">
            <div className="container-homenav">
                <div className="home-p">
                    <marquee direction="left">Welcome</marquee>
                    <img src={speaker} alt="speaker" />
                </div>
                <button type="button" className="submit-button" onClick={openModal}>
                    Register
                </button>
                <input
                    type="text"
                    placeholder="UserName*"
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password*"
                    className="input-field"
                />
                <button type="submit" className="submit-button">
                    Login
                </button>
                <button type="submit" className="submit-button">
                    Demo
                </button>
            </div>
            <Register isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default SubNavTwo;
