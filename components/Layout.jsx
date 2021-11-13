import React, { Children } from "react";

import { Header } from "./";

const Layout = ({ children }) => {
    console.log("Layout.jsx", children);
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
