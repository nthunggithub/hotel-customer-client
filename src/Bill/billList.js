import React, { useEffect, useState } from "react";
// material-ui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { IconButton, InputBase } from "@material-ui/core";
import Banner from "../RoomDetail/banner.js";
import api from "../callapi/index";
import EditBills from "../Modal/EditBills";
import Button from '@material-ui/core/Button';
Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
  (mm > 9 ? '' : '0') + mm,
  (dd > 9 ? '' : '0') + dd
  ].join('/');
};
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  count: {
    width: 75,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#D2112D",
    color: "white",
    fontWeight: "bold",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#033A56",
  },
}))(TableRow);

export default function CartTable() {
  const classes = useStyles();
  const [cartData, setCartData] = useState([]);
  const [show, setShow] = useState(false);
  const [itemModel, setItemModel] = useState({})
  const [notify, setNotify] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      let res = await api.get("getbills");
      setCartData(res.data);
    }
    fetchData()
  }, [])
  const handleShow = (item) => { setShow(true); setItemModel(item); console.log(item) };
  const handleCloseEditBills = async (data) => {
    console.log(data);
    if (data) {
      let res = await api.post("/api/updateBills", data);
      setNotify(res.data.message);
      let res1 = await api.get("getbills");
      setCartData(res1.data);
    }
    setShow(false);
  }
  return (
    <>
      <EditBills askEditBills={show} handleCloseEditBills={handleCloseEditBills} item={itemModel} />
      <Banner />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "40px", fontWeight: "bold" }}>Danh sách đơn đặt phòng</div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "20px" }}>{notify}</div>
      <Grid container xs={12}>
        <Grid xs={1}></Grid>
        <Grid xs={10}>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" style={{ borderTopLeftRadius: 30, fontSize: "15px" }}>
                    Tên phòng
                    </StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}> Ngày đặt</StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}>Ngày nhận phòng</StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}>Ngày trả phòng</StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}>Số người lớn</StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}>Số trẻ em</StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}>Tạm tính</StyledTableCell>
                  <StyledTableCell align="center" style={{ fontSize: "15px" }}>Trạng thái</StyledTableCell>
                  <StyledTableCell align="center" style={{ borderTopRightRadius: 30, fontSize: "15px" }}>Chỉnh sửa</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  cartData.map((item, index) => {
                    return <StyledTableRow key={1}>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.TenP}
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.NgayTao ? new Date(item.NgayTao).yyyymmdd() : ''}
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.NgayNhanPhong ? new Date(item.NgayNhanPhong).yyyymmdd() : ''}
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.NgayTraPhong ? new Date(item.NgayTraPhong).yyyymmdd() : ''}
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.SoNguoiLon}
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.SoTreEm}
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.TongTien * 1000} VNĐ
                      </TableCell>
                      <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        {item.TrangThai === "1" ? "Chưa nhận phòng" : item.TrangThai === "2" ? "Đã nhận" : "Đã huỷ"}
                      </TableCell>
                      {item.TrangThai === "1" ? <TableCell style={{ color: "white", fontSize: "15px" }} align="center">
                        <Button variant="primary" onClick={() => handleShow(item)}>
                          Chỉnh sửa
                        </Button>
                      </TableCell> : <TableCell></TableCell>
                      }

                    </StyledTableRow>
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
