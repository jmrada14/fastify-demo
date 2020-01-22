import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="btn btn-danger" style={{float: "right"}} {...props}  tabIndex="0">
      Delete
    </button>
  );
}

export default DeleteBtn;
