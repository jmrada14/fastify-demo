import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="btn btn-danger" style={{float: "right"}} {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export default DeleteBtn;
