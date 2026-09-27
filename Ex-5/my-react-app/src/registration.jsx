import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Registration() {
     

    return (
        <>
            <section class="section">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mb-3 text-center">Registration </h4>
                                    <form action="/registration.html">
                                        <div class="form-group mb-3">

                                            <input type="email" class="form-control" id="email" name="email"
                                                placeholder="Email" />
                                        </div>
                                        <div class="form-group mb-3">

                                            <input type="password" class="form-control" id="password" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <div class="form-group mb-3">

                                            <input type="tel" class="form-control" placeholder="Enter Mobile" name="TEL" />
                                        </div>
                                        <input type="submit" class="btn btn-primary w-100" value="Register" />
                                        <p class="mt-3 text-center">Already have an account <Link to="/login">Login here</Link></p>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Registration