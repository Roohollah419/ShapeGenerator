import React from "react";
import Navigation from "./navigation";

function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="navigationWrapper">
        <Navigation />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
}

export default Layout;
