import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {

  const [lists,setLists] = useState([]);
  const [genre,setGenre] = useState(null);

  useEffect(()=>{
    const getRandomList = async()=>{
      try{
        const res = await axios.get(`http://localhost:8800/api/lists${type ? "?type=" : ""}${genre ? "&genre="+genre : ""}`,
        {
          headers : {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFmYmU0NWY5ZDBlMzNjYTk3MGI5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTAwNjE5MCwiZXhwIjoxNjg5NDM4MTkwfQ.F_RlaLr-rV37h5Bh_hEleOzrgWWPIkgeoF3NTKuoadw"
          },
        })
        setLists(res.data);
      }
      catch(err){
        console.log(err);
      }
    }

    getRandomList();
  },[type,genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      {lists.map((list)=>(
        <List list={list}/>
      ))}
    </div>
  );
};

export default Home;