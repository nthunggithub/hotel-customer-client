import React, { useState, useEffect } from "react";
import RoomItem from "./RoomItem";
import Banner from "../RoomDetail/banner";
import Search from "./Search";
import Grid from '@material-ui/core/Grid';
import api from "../callapi/index";
import RoomList from "./RoomList";
import { DataGrid } from '@material-ui/data-grid';
function Rooms(props) {
  const [rooms, setRooms] = useState([]);
  // const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await api.get("/getListRoom")
        console.log(res.data.listRooms);
        setRooms(res.data.listRooms)
      } catch (error) {

      }
    }
    fetchData();
  }, [])
  // let RL = rooms.map((room) => {
  //   return (<div className="col-xs-12 col-sm-4">
  //             <RoomItem room={room} />
  //           </div>)
  // })
  return (
    <div>
      <Banner />
      <Grid container xs={12}>
        <Grid xs={1}></Grid>
        <Grid xs={10}><Search setRooms={setRooms}/></Grid>
      </Grid>
      <RoomList rooms={rooms}/>
      {/* <div className="row" style={{marginTop: "50px"}}>
        <div className="col-xs-12">
          <div
            className="ot-accomd-modations-content owl-single"
            data-single_item="false"
            data-desktop="1"
            data-small_desktop="1"
            data-tablet="2"
            data-mobile="1"
            data-nav="false"
            data-pagination="false"
          ></div>
          <div className="container">
            <div className="row">
            <DataGrid
            page={page}
            onPageChange={(params) => {
            setPage(params.page);
              }}
            pageSize={5}
            pagination
            {...RL}
            />
              {RL}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Rooms;
