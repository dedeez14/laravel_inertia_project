//import React
import React from 'react';

//import Link
import { Link } from '@inertiajs/inertia-react';

function LayoutLaman({ children }) {

    // $(document).ready(function() {
    //     $('#login_form').hide();
    // });

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" href="/">HOME</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/news">NEWS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about-us">ABOUT US</Link>
                                </li>
                            </ul>
                            <Link className='btn btn-sm btn-primary'>Login</Link>
                            <Link className='btn btn-sm btn-primary'>Register</Link>
                            <form className="d-flex" id='login_form'>
                            <input type="text" name='login_email' className='form-control form-control-sm me-2' />
                            <input type="password" name='login_password' className='form-control form-control-sm me-2' />
                            <button type='submit' className='btn btn-sm btn-primary'>login</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                { children }
            </main>
        </>
    )

}

export default LayoutLaman
