import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
     return (
          <div
               style={{
                    height: "50px",
                    display: "flex",
                    backgroundColor: "Tomato",
               }}
          >
               <div
                    style={{
                         width: "500px",
                         display: "flex",
                         justifyContent: "space-between",
                         padding: "10px",
                         alignItems: "center",
                         textDecoration: "none",
                    }}
               >
                    <Link to="/notes">
                         <button
                              style={{
                                   backgroundColor: "Tomato",
                                   borderRadius: "10px",
                              }}
                         >
                              HOME
                         </button>
                    </Link>
                    <Link to="/createnote">
                         <button
                              style={{
                                   backgroundColor: "Tomato",
                                   borderRadius: "10px",
                              }}
                         >
                              ADD NOTES
                         </button>
                    </Link>
                    <Link to="/register">
                         <button
                              style={{
                                   backgroundColor: "Tomato",
                                   borderRadius: "10px",
                              }}
                         >
                              REGISTER
                         </button>
                    </Link>
                    <Link to="/login">
                         <button
                              style={{
                                   backgroundColor: "Tomato",
                                   borderRadius: "10px",
                              }}
                         >
                              LOGIN
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default Navbar;
