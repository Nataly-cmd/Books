import React from "react";

const Header = () => {
  return (
    <header className="text-center pt-4 pb-3" style={styleHeader}>
      <h1>Список книг</h1>
    </header>
  );
};
const styleHeader = { backgroundImage: "aliceblue" };

export default Header;
