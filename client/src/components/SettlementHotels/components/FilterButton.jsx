import React from "react";
import FilterBar from "../FilterBar";
import { Button, Drawer } from "@mui/material";

export default function FilterButton() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
  return (
    <div>
    <Button onClick={toggleDrawer(true)}>Filter</Button>
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <FilterBar toggleDrawer={setOpen} />
    </Drawer>
  </div>
  );
}