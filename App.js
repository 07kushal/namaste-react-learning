import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/body";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurants Container
 *    - Restaurants Cards
 * Footer
 *  - Copyrights
 *  - Links
 *  - Addresses
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// React Component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
