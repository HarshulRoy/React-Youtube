import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import {
  YOUTUBE_CHANNEL_PROFILE_PICTURE_API,
  YOUTUBE_COMMENT_API,
  YOUTUBE_SINGLE_VIDEO_API,
  YOUTUBE_SUBSCRIPTION_COUNT_API,
} from "../utils/constant";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [fold,setFold] = React.useState(true)
  const [comments, setComments] = React.useState([]);
  const [profileData, setProfileData] = React.useState(null);
  const [subscription,setSubscription] = React.useState(null)
  const [profilePicture, setProfilePicture] = React.useState(
    "https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
  );
  
  const dispatch = useDispatch();
  React.useEffect(() => {
    fetchComments();
    dispatch(closeMenu());
    fetchingSingleVideo();
    document.documentElement.scrollTop = 0;
    return () => dispatch(openMenu());
  }, []);

  // Likes on Video
  let likes = profileData?.statistics?.likeCount
  if(likes!=null && likes>1000 && likes<1000000){
    likes = Math.round((likes/1000)*10)/10 + "K"
  }else if(likes!=null && likes>=1000000){
    likes = Math.round((likes/1000000)*10)/10 + "M"
  }
  // subscription on Video
  let subscribers = subscription
  if(subscribers!=null && subscribers>1000 && subscribers<1000000){
    subscribers = Math.round((subscribers/1000)*10)/10 + "K"
  }else if(subscribers!=null && subscribers>=1000000){
    subscribers = Math.round((subscribers/1000000)*10)/10 + "M"
  }
  // fetching single video
  async function fetchingSingleVideo() {
    let data = await fetch(YOUTUBE_SINGLE_VIDEO_API + searchParams.get("v"));
    data = await data.json();
    // fetching profile picture
    let result = await fetch(
      YOUTUBE_CHANNEL_PROFILE_PICTURE_API + data.items[0].snippet.channelId
    );
    result = await result.json();
    //fetching subscription
    let count = await fetch(YOUTUBE_SUBSCRIPTION_COUNT_API + data.items[0].snippet.channelId)
    count = await count.json()
    setSubscription(count?.items[0]?.statistics?.subscriberCount)
    setProfilePicture(result.items[0].snippet.thumbnails.default.url);
    // console.log('data',data.items[0].snippet)
    let str = data.items[0].snippet.description.split("\n");
    data.items[0].snippet.description = str;
    setProfileData(data.items[0]);
  }
  // fetching comments
  async function fetchComments() {
    let data = await fetch(YOUTUBE_COMMENT_API + searchParams.get("v"));
    data = await data.json();
    setComments(data.items);
  }

  return (
    <div className="py-4 px-10 col-span-8 rounded-lg flex flex-col">
      <div>
        <iframe
          className="rounded-2xl"
          width="815"
          height="465"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title='Watch Our Epic Response To Hanumankind&#39;s "Big Dawgs" Music Video Ft. Kalmi!'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {profileData && (
          <div className="mb-4">
            <h1 className="font-bold text-[22px] my-2">{profileData.snippet.title}</h1>
            <div className="flex justify-between">
              <div className="flex justify-start gap-6 items-center">
                <img
                  className="w-12 rounded-3xl"
                  src={profilePicture}
                  alt="profile"
                />
                <div>
                  <span className="font-medium">
                    {profileData.snippet.channelTitle}
                  </span>
                  <p className="text-sm text-gray-600">{subscribers} Subscribers</p>
                </div>
                <button className="bg-black font-semibold text-white h-10 px-5 rounded-3xl hover:bg-stone-800">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center rounded-3xl bg-[rgb(247,247,247)] cursor-pointer">
                  <div className="hover:bg-[rgb(196,196,196)] rounded-l-3xl py-2 px-3 flex items-center">
                    <span className="min-w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        aria-hidden="true"
                        style={{
                          pointerEvents: "none",
                          display: "inherit",
                          width: "24px",
                          height: "24px",
                        }}
                      >
                        <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                      </svg>
                    </span>
                    <span className="pr-3">{likes}</span>
                  </div>
                  <div className="flex items-center hover:bg-[rgb(196,196,196)] rounded-r-3xl py-2">
                    <span className="border-l-[1px] border-slate-300 pl-3 rounded-r-3xl px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        aria-hidden="true"
                        style={{
                          pointerEvents: "none",
                          display: "inherit",
                          width: "24px",
                          height: "24px",
                        }}
                      >
                        <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex items-center py-2 px-3 rounded-3xl bg-[rgb(247,247,247)] hover:bg-[rgb(196,196,196)] cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{pointerEvents: "none", display: "inherit", width: "100%", height: "100%"}}><path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path></svg></span>
                  <span>Share</span>
                </div>
                <div className="py-2 px-3 rounded-3xl bg-[rgb(247,247,247)] hover:bg-[rgb(196,196,196)] cursor-pointer">download</div>
              </div>
            </div>
          </div>
        )}
        {profileData != null && (
          <div className="bg-[rgb(247,247,247)] text-sm  rounded-xl px-3">
            <div className={fold?"h-28 overflow-hidden w-[100%] p-2 relative":"w-[100%] p-2 relative"}>
              <h2 className="font-medium tracking-wide">{parseInt(profileData?.statistics?.viewCount).toLocaleString()} views</h2>
              <div>
                {profileData.snippet.description.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
              <span onClick={()=> setFold((pre)=>!pre)} className="absolute bottom-1 right-2 cursor-pointer hover:bg-[rgb(228,228,228)] px-2 py-1 rounded-2xl font-medium">{fold?"...Show":"...Hide"}</span>
            </div>
          </div>
        )}
        <CommentsContainer commentData={comments} commentCount={profileData?.statistics?.commentCount} />
      </div>
      <div></div>
    </div>
  );
};

export default WatchPage;
