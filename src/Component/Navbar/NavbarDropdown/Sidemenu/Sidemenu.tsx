import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Sidemenuitems} from "./SidemenuItems";



function Sidemenu(){
    const [Sidedrop,setSidedrop]=useState(false);

    return(
        <ul className='absolute list-none text-start left-sidedownleft top-sidedowntop'>
            {Sidemenuitems.map((map) => (
                <li key={map.id}>
                    <Link to={map.path} className={map.className} onClick={() => setSidedrop(!Sidedrop)} >
                        <p className='font-body text-xl'>{map.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default Sidemenu;
