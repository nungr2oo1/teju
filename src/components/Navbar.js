import React from 'react';
function Navbar({mandhu, name}) {
    console.log("This is from navbar", mandhu)

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        window.location.reload();
    }

    return (
        <div style={{backgroundColor: 'black', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>{name || "Peru Leni Shop"} <span style={{color: 'yellow'}}>{mandhu}</span></h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar;