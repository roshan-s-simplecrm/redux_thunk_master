import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import '../css/custom.css';
const header = () => {
    const displayDesktop = () => {
        return <Toolbar className="toolbar">Perficient National Bank</Toolbar>;
      };
    return (
    <header>
      <AppBar className="header">{displayDesktop()}</AppBar>
    </header>   
    );
};

export default header;
