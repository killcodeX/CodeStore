import React from 'react'

export default function navbar() {
    return (
        <>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">Your Code Store</div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="btns">
                            <a class="button is-primary" href="#"><strong>Add Snippet</strong></a>
                        </div>
                    </div>
                </div>
            </nav>  
        </>
    )
}
