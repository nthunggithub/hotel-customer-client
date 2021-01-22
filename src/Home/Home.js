import React, {useState, useEffect} from "react";
import api from "../callapi/index";
import Intro from "./InfoWeb";
import Introduction from "./Introduction";
import ListRoom from "./listRoom";
const images = [
  {
    url: "https://kriesi.at/themes/enfold-hotel/wp-content/uploads/sites/58/2015/07/slider4-1030x433.jpg"
  },
  {
    url:
      "https://www.jeevaresorts.com/wp-content/uploads/2016/01/santai-resort-slider-1-1024x427.jpg"
  },
  {
    url:
      "https://www.royaleheritage.com/royal/wp-content/uploads/2015/03/37.jpg"
  },
];
function Home(props) {
  const [rooms, setRooms] = useState([]);
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
  return (
    <div>
      <div style={{marginTop: "180px"}}> <Introduction images={images} /></div>
      <Intro />
      <ListRoom rooms={rooms}/>
    </div>
  );
}

export default Home;
