import React from 'react';
import './App.css';
import Homeimage from './assets/home_image.svg';

function home() {
    return (
        <>
            <section>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1>Find your next great read at our online <span>ACE book store</span></h1>
                            <p>Explore our current collection</p>
                            <div class="search_container d-flex gap-0">
                                <input type="text" placeholder="Find your books here...." />
                                <button class="btn btn-primary search_button">Search now</button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="home_img">
                                <img src={Homeimage} alt="Logo" class="book-image img-fluid" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default home