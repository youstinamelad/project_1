import { useState } from "react";

const Post = (props) => {
  const [x,setx]=useState(true);
  const myFunction= ()=>{
    setx(false);

  }
  return (
    <div>
      <h1>{props.data?.title}</h1>
      <button onClick={myFunction}>hide date</button>
      <div>
       {x&&<span> {props.data?.date}</span>} 
        <span> by {props.data?.author}</span>
      </div>
      <div>{props.data?.contents} </div>
    </div>
  );
};
export default Post;
