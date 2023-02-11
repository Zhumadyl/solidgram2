import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import Preloader from "../../components/preloader/Preloader";
import SideBar from "../../components/sidebar/SideBar";
import Story from "../../components/story/Story";
import css from "./HomePage.module.css";
import Recomendation from "../../components/recomendation/Recomendation";


function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/posts')
      .finally(() => setLoading(false))
      .then((res) => res.json())
      .then((data) => setPosts(data))
    fetch('')
  }, [])


  if(isLoading) return <Preloader />;
  return (
    <div className="pageContainer">
      <SideBar />
      <div className={css.content}>
        <div className={css.innerContent}>
          <div className={css.storis}>
            <Story  src='https://cdn-icons-png.flaticon.com/512/665/665228.png' p='ElonMusk'/>
            <Story  src='https://cdn-icons-png.flaticon.com/512/9486/9486713.png' p='WarrenBuff'/>
            <Story  src='https://cdn-icons-png.flaticon.com/512/9606/9606867.png' p='JeffBezos'/>
            <Story  src='https://cdn-icons-png.flaticon.com/512/4138/4138124.png' p='MarkSuc'/>
            <Story  src='https://cdn-icons-png.flaticon.com/512/270/270017.png' p='Luevuiton'/>
            <Story  src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' p='random_name'/>
            <Story  src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png' p='noname'/>
          </div>
          <div className={css.posts}>
            {
              posts.map((item) => (
                <Post key={item.id} {...item} />
              )) // [<Post />, <Post />]
            }
          </div>
        </div>
        <div className={css.recomendation}>
            <Recomendation/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;