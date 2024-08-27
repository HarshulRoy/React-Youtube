import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments,setComments] = React.useState([])
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchComments()
    dispatch(closeMenu());
    return ()=> dispatch(openMenu())
  }, []);

  async function fetchComments(){
    let data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCQqxr3I97aw4EBPTsAeloDXqgSC6fRIUA&textFormat=plainText&part=snippet&videoId=${searchParams.get("v")}`)
    data = await data.json()
    setComments(data.items)
    console.log(data.items)
  }
  return (
    <div className="py-4 px-5 col-span-12 rounded-lg flex flex-col w-[98vw]">
      <iframe
        className="rounded-2xl"
        width="853"
        height="480"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title='Watch Our Epic Response To Hanumankind&#39;s "Big Dawgs" Music Video Ft. Kalmi!'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <CommentsContainer commentData={comments} />
    </div>
  );
};

export default WatchPage;
