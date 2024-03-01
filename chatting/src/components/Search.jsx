import React from "react";

const  Search = ()=>{
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user"/>
            </div>
            <div className="userChat">
                <img src="https://w0.peakpx.com/wallpaper/615/265/HD-wallpaper-little-krishna-liittle-krishna-with-mangoes-god-kanha.jpg" alt="" />
                <div className="userChatInfo">
                 <span>Jane</span>
                 <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Search;