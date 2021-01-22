import React, { useState, useEffect } from "react";
import api from '../callapi';
import CommentList from "./commentList";
import Booking from "./formBooking";
import Info from "./InfoRoom";
import Comment from "./inputComment";
import Banner from "./banner";
import ListRoom from "./listRoom";
import AskBooking from "../Modal/askBooking";
import Grid from '@material-ui/core/Grid';
function RoomDetail({ match }) {
  const [roomInfo, setRoomInfo] = useState(null);
  const [cmtList, setCmtList] = useState([]);
  const [rooms, setRooms] = useState([]);
  // const [askBooking, setAskBooking] = useState(false);

  useEffect(() => {
    console.log(match.params.id)
    const fetchData = async () => {
      let room;
      try {
        room = await api.get('/getRoomInfo/' + match.params.id);
        setRoomInfo(room.data.room);
        //comment
        let res = await api.get('/getcommentlist/' + match.params.id);
        console.log(res.data)
        setCmtList(res.data);
        let ListR = await api.get("/getListRoom")
        setRooms(ListR.data.listRooms)
      } catch (error) {
        return;
      }
    }
    fetchData();
  }, [])

  const callUpdateListComment = async() => {
    let res = await api.get('/getcommentlist/' + match.params.id);
    setCmtList(res.data);
  }

  // const handleCloseAskBooking = () => setAskBooking(false);

  return (
    <>
      <Banner />
      <section class="section-blog bg-white">
        <div class="container">
          <div class="blog">
            <div class="row">
              <div class="col-md-8 ">
                <div class="blog-content">
                  <Info roomInfo={roomInfo} />
                  <div id="comments">
                    <CommentList cmtList={cmtList} />
                  </div>
                  <div class="comment-respond">
                    <Comment match={match} callUpdateListComment={callUpdateListComment} />
                  </div>
                </div>
              </div>
              <div class="col-md-4 ">
                <Booking roomInfo={roomInfo} match = {match}/>
                {/* <Grid container xs={12}>
                <AskBooking askBooking={askBooking} handleCloseAskBooking={handleCloseAskBooking} />
                </Grid> */}
                <br/><br/><br/><br/>
                <ListRoom rooms={rooms} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RoomDetail;
