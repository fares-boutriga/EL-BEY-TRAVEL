import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { createData, getComparator, stableSort } from "./utils/tableUtils";
import EnhancedTableHead from "./components/HeadTable";
import EnhancedTableToolbar from "./components/TableToolbar";

const headCells = [
  { id: "referance", numeric: false, disablePadding: true, label: "Referance" },
  { id: "client", numeric: false, disablePadding: false, label: "Client" },
  { id: "teleClient", numeric: false, disablePadding: false, label: "N° client" },
  { id: "hotelName", numeric: false, disablePadding: false, label: "Hotel" },
  { id: "hotelPayer", numeric: false, disablePadding: false, label: "Regelement Hotel" },
  { id: "cotisationHotel", numeric: false, disablePadding: false, label: "Prix hotel" },
  { id: "modePaymentHotel", numeric: false, disablePadding: false, label: "Mode Payment" },
  { id: "checkNumber", numeric: false, disablePadding: false, label: "N° check/virement" },
  { id: "dateReservation", numeric: false, disablePadding: false, label: "Data Reservation" },
];

const fetchData = async (setData) => {
  try {
    const result = await axios.get("http://127.0.0.1:5000/app/reservation/all");
    setData(result.data);
    console.log('this is the result of fetching the data',result.data)
  } catch (err) {
    console.error(err);
  }
};

const generateRows = (data) => {
  if (!data) return [];
  return data.map((e) => ({
    id: e.id,
    referance: e.referance,
    client: e.client,
    teleClient: e.teleClient,
    hotelName: e.hotelName,
    total: e.total,
    cotisationHotel: e.cotisationHotel,
    checkNumber: e.checkNumber,
    modePaymentHotel: e.modePaymentHotel,
    hotelPayer: e.hotelPayer,
    dateReservation: e.dateReservation,
  }));
};

export default function EnhancedTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("referance");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);

  const { startDate, endDate, payedHotel, credit, searchInput, today } = useSelector((state) => state.filter);

  useEffect(() => {
    fetchData(setData);
  }, []);

  useEffect(() => {
    setRows(generateRows(data));
  }, [data]);

  useEffect(() => {
    filterData();
  }, [startDate, endDate, payedHotel, credit, searchInput]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleDate = (date) => {
    const itemDate = new Date(date);
    return itemDate.toISOString().split('T')[0];
  };

  const filterData = () => {
    const todayDate = new Date().toISOString().split('T')[0];
    const filteredData = data.filter((item) => {
      const isIncluded = (field, value) => item[field].toLowerCase().includes(value.toLowerCase());
  
      return (
        (!searchInput ||
          searchInput.length <= 1 ||
          isIncluded("referance", searchInput) ||
          isIncluded("client", searchInput) ||
          isIncluded("hotelName", searchInput)) &&
        (!startDate ||
          !endDate ||
          (handleDate(item.dateReservation) >= handleDate(startDate) &&
            handleDate(item.dateReservation) <= handleDate(endDate))) &&
        (today === false || handleDate(item.dateReservation) === todayDate) &&
        (payedHotel === "" || item.hotelPayer === payedHotel) &&
        (credit === "" || (credit ? item.reste > 0 : item.reste === 0))
      );
    });
  
    setRows(filteredData);
  };
  
  // const handleDate = (date) => {
  //   const itemDate = new Date(date);
  //   return itemDate.toISOString().split('T')[0];
  // };
  
  // const compareDates = (date1, date2) => {
  //   const d1 = new Date(date1);
  //   const d2 = new Date(date2);
  //   return d1.getTime() - d2.getTime(); // returns positive if d1 is after d2, negative if before, 0 if equal
  // };
  
  // const filterData = () => {
  //   const todayDate = new Date().toISOString().split('T')[0];
  //   const filteredData = data.filter((item) => {
  //     const isIncluded = (field, value) => item[field].toLowerCase().includes(value.toLowerCase());
  
  //     return (
  //       (!searchInput || 
  //         searchInput.length <= 1 || 
  //         isIncluded("referance", searchInput) || 
  //         isIncluded("client", searchInput) || 
  //         isIncluded("hotelName", searchInput)) &&
  //       (!startDate || !endDate || 
  //         (compareDates(handleDate(item.dateReservation), handleDate(startDate)) >= 0 &&
  //          compareDates(handleDate(item.dateReservation), handleDate(endDate)) <= 0)) &&
  //       (today === false || handleDate(item.dateReservation) === todayDate) &&
  //       (payedHotel === "" || item.hotelPayer === payedHotel) &&
  //       (credit === "" || (credit ? item.reste > 0 : item.reste === 0))
  //     );
  //   });
  
  //   setRows(filteredData);
  // };
  
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Button onClick={()=>{
        console.log("startDate",startDate)
        console.log("endDate", endDate)
        console.log("payedHotel", payedHotel)
        console.log("credit", credit, )
        console.log("searchInput", searchInput)
        console.log("today", today)
      }}>log</Button>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} selected={selected} data={data} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    align="center"
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {row.referance}
                    </TableCell>
                    <TableCell align="center">{row.client}</TableCell>
                    <TableCell align="center">{row.teleClient}</TableCell>
                    <TableCell align="center">{row.hotelName}</TableCell>
                    <TableCell align="center">
                      <Typography style={{ color: row.hotelPayer ? "green" : "red" }}>
                        {row.hotelPayer ? "Payé" : "Non Payé"}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">{row.cotisationHotel}</TableCell>
                    <TableCell align="center">{row.modePaymentHotel}</TableCell>
                    <TableCell align="center">{row.checkNumber}</TableCell>
                    <TableCell align="center">{new Date(row.dateReservation).toLocaleString()}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
