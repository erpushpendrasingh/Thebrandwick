import React from "react";
import { Link } from "react-router-dom";

const MyButton = ({ item }) => {
  const { title, path } = item;
  console.log("title, path", title, path);
  return (
    <Link to={path}>
      <button
        style={{
          backgroundColor: "Tomato",
          width: "100px",
          height: "40px",
          borderRadius: "10px",
        }}
      >
        {title}
      </button>
    </Link>
  );
};

export default MyButton;
