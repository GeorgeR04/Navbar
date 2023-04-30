import React, {useState} from "react";
import { Link } from "react-router-dom"
import {InformationDropdown} from "../navbarItems";
import Sidemenu from "./Sidemenu/Sidemenu";




function Dropdownmenu(){
    const [dropdown ,setdropdown]= useState(false);
    const [Sidedown, setSidedown] = useState(false);


    return(<>
            <ul className={dropdown ?"none" : "w-20 absolute list-none text-start top-dropdown bg-Drop "} onClick={() => setdropdown(!dropdown)}>
                {InformationDropdown.map((item) =>{
                    if (item.title === "DropItems2") {
                        return (
                            <li
                                key={item.id}
                                className={item.className}
                                onMouseEnter={() => setSidedown(true)}
                                onMouseLeave={() => setSidedown(false)}
                            >
                                <Link to={item.path}>{item.title}</Link>
                                {Sidedown && <Sidemenu />}



                            </li>
                        );

                    }
                    return(
                        <li key={item.id} >
                            <Link to={item.path} className={item.className}
                                  onClick={() => setdropdown(!dropdown)}
                            >{item.title}
                            </Link>
                        </li>
                    );


                })}
            </ul>
        </>
    );
}
export default Dropdownmenu;



