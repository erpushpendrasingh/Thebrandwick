import React from "react";
import { buttons } from "../utils/data";
import MyButton from "./MyButton";
import { style } from "./style";
const Navbar = () => {
  return (
    <div style={style.navbar}>
      <div style={style.navbtn}>
        {buttons?.map((item) => (
          <MyButton item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
