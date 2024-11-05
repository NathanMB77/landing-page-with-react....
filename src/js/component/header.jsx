import React from "react";

//create your first component
const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top">
            <div className="container-fluid">
                <div className='row w-100 justify-content-center'>
                    <div className='col-8 d-flex flex-row justify-content-between'>
                        <div>
                            <h3 id='header-title'>Start Bootstrap</h3>
                        </div>
                        <div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
	);
};


export default Header;
