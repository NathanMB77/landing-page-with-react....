import React from 'react';

import Header from "./header.jsx";
import Card from "./card.jsx";
import Jumbotron from './jumbotron.jsx'

export const Home = () =>{
    return (
        <>
            <Header />
            <div class='container mt-5'>
                <div class='row w-100 justify-content-center mt-5'>
                    <div class='col-12 mt-4'>
                        <Jumbotron />
                    </div>
                </div>
                <div class='row w-100 justify-content-center'>
                    <div class='col-12 mt-3'>
                        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer bg-dark pt-5 pb-4 mt-4'>
                <div className=' d-flex flex-row justify-content-center'>
                    <p className='copyright'>Copyright @ your website 2024</p>
                </div>
            </div>
        </>
    );
};

export default Home;