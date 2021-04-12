import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../asset/AllProductsDropDown.css";
import { Link } from "react-router-dom";

function AllProductsDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropDownButton">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Products
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/AllProducts">
          <MenuItem onClick={handleClose}>ALL PRODUCTS</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>DESKTOP COMPUTERS</MenuItem>
        <MenuItem onClick={handleClose}>LAPTOPS</MenuItem>
        <MenuItem onClick={handleClose}>TABLETS</MenuItem>
        <MenuItem onClick={handleClose}>TELEVISIONS</MenuItem>
        <MenuItem onClick={handleClose}>CELL PHONES</MenuItem>
      </Menu>
    </div>
  );
}
export default AllProductsDropDown;
