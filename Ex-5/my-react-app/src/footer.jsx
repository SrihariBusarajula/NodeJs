import React from 'react';
import './App.css';
import Facebook from './assets/facebook.png';
import Twitter from './assets/twitter.png';
import Instagram from './assets/instagram.png';
import Footer from './footer.jsx';



function footer() {
    return (
        <>
            <footer class="bg-dark p-3">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-5 col-12">
                            <div class="social_media d-flex gap-3 mb-2">
                                <img src={Facebook} alt="Facebook" />
                                <img src={Twitter} alt="Twitter" />
                                <img src={Instagram} alt="Instagram" />
                            </div>
                        </div>
                        <div class="col-lg-8  col-md-7 col-12">
                            <p class="text-white text-end mb-0">&copy; 2023 ACE Book Store. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </footer >

        </>
    )
}
export default footer