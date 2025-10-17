import React from 'react';
function Navbar({mandhu}) {
    console.log("This is from navbar", mandhu)
    return (
        <div style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>
            <h1>Wine Shop <span style={{color: 'yellow'}}>{mandhu}</span></h1>
        </div>
    )
}

export default Navbar;