import React, {useState, useEffect } from "react";
import RoomItem from "./RoomItem";

function RoomList({rooms}) {
  return (
    <div>
      <div className="row" style={{marginTop: "50px"}}>
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
              {rooms.map((room) => (
                <div className="col-xs-12 col-sm-4">
                  <RoomItem room={room} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomList;
