import React, { useEffect, useState } from 'react'
import SideBar from '../../components/sidebar/SideBar'
import css from './Interesting.module.css'
// import Preloader from "../../components/preloader/Preloader";

function Interesting() {
    // const [post2, setPosts] = useState([]);
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/posts')
    //         .finally(() => setLoading(false))
    //         .then((res) => res.json())
    //         .then((data) => setPosts(data))
    //     fetch('')
    // }, [])
    // if (isLoading) return <Preloader />;
    return (
        <div className={css.flex}>
            <SideBar />
            <div>
                {/* {
                    post2.map((item) => {
                        <ExplorePhoto key={item.id} {...item} />
                    })
                } */}
                <ExplorePhoto image='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' />
            </div>
        </div>
    )
}

export default Interesting

export function ExplorePhoto(props) {
    return (
        <div className={css.wrapper}>
            <div className={css.parent} >
                <div className={css.child}>
                    <img src={props.image} alt="" width='300px' />
                </div>
                <div className={css.child}>
                    <img src={props.image} alt="" width='300px' />
                </div>
                <div className={css.child}>
                    <img src={props.image} alt="" width='300px' />
                </div>
            </div>
            <div className={css.parent} >
                <div className={css.child}>
                    <img src={props.image} alt="" width='300px' />
                </div>
                <div className={css.child}>
                    <img src={props.image} alt="" width='300px' />
                </div>
                <div className={css.child}>
                    <img src={props.image} alt="" width='300px' />
                </div>
            </div>
        </div>
    )

}