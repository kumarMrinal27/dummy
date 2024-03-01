import React from "react";

const  Navbar = ()=>{
    return (
        <div className="navbar">
            <span className="logo">
                Lama chat
            </span>
            <div className="user">
                <img src="https://w0.peakpx.com/wallpaper/615/265/HD-wallpaper-little-krishna-liittle-krishna-with-mangoes-god-kanha.jpg" alt="" />
                <span>John</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;