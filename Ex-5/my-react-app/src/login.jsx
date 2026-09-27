import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <section class="section">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mb-3 text-center">Login </h4>
                                    <form action="registration.html">
                                        <div class="form-group mb-3">
                                            {/* <label for="email">Email:</label>  */}
                                            <input type="email" class="form-control" id="email" name="email"
                                                placeholder="Email" />
                                        </div>
                                        <div class="form-group mb-3">
                                            {/* <label for="password">Password:</label> */}
                                            <input type="password" class="form-control" id="password" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <input type="submit" class="btn btn-primary w-100" value="Login" />
                                        <p class="mt-3 text-center">Dont have an account <Link to="/registration">Register
                                            here</Link></p>
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
export default Login