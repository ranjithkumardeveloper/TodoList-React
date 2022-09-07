import React from "react";

const Header = (props) => {
  const { title, className } = props;

  return (
    <div className={className}>
      <span>{title}</span>
    </div>
  );
};

export default Header;
