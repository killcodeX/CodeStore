import React from 'react';
import {
    Link
  } from "react-router-dom";
  

export default function Navbar1() {
    return (
        <>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">Your Code Store</div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="btns">
                            <Link className="button is-primary" to="/"><strong>Go Home</strong></Link>
                        </div>
                    </div>
                </div>
            </nav>  
        </>
    )
}
