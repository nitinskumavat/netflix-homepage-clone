import React, { useEffect, useState } from 'react';
import './Nav.css';


function Nav() {

    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt="Netflix"
        />
        <img 
            className="nav_avatar"
            src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
            alt="User"
        />
    </div>
  );
}

export default Nav;
