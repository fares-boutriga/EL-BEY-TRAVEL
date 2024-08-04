import React, { useState } from 'react';
import { Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterButton from './FilterButton';
import PayModel from './PayModel';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';

function EnhancedTableToolbar({ numSelected,selected,data }) {
  const [open, setOpen] = useState(false);

  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}
    <FilterButton/>
      {numSelected > 0 ? (
        <>
          <Tooltip title="payey">
          <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button>
        </Tooltip>
          <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        </>
      
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
            <PayModel setOpen={setOpen} open={open} selected={selected} data={data}/>

    </Toolbar>
  );
}

export default EnhancedTableToolbar;
