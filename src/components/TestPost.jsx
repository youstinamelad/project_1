import { Paper } from "@mui/material";
import * as React from "react";

import { Checkbox } from "@mui/material";
import { useRecoilState } from "recoil";


const Array_haircuts = [
  {
    Name: "Adult Cut",
    Time: "30 minutes",
    price: "300$",
    info: "Looking for a quick haircut? This is the one for you.",
  },
  {
    Name: "Cut & Shampoo",
    Time: "1 hours",
    price: "100$",
    info: "This cut includes a shampoo service with some of our favorite professional products",
  },

  {
    Name: "Cut, Shampoo & Full Style",
    Time: "20 minutes",
    price: "55550$",
    info: "This cut option offers styling with hot tools to complete your new look",
  },

  {
    Name: "Cut, Shampoo & Basic Style",
    Time: "45 minutes",
    price: "$500",
    info: "After this blow-dry and brush-finished cut, you'll be ready for anything",
  },
];

const TestPost = (props) => {



  // let showData = true

  const handleChange_check = (event) => {
    console.log("liiiiiiiiiiiiiiiiiiksdfdkherklhjjjjjjjjjjjjjjjjioheor")
   
    //  setShow(!show)
    // setShow(false);


    if (event.target.checked) {
      console.log(event.target.checked)
      console.log(Array_haircuts[0].Name);
      // { document.querySelector(".p1").innerHTML=Array_haircuts[1].Name}     

    } else if (event.target.checked == false) {
      console.log(event.target.checked)
      console.log(Array_haircuts[1].Name);
     

    };

    console.log(props)

  }
  
  return <div>

  <div className="lef">
    <div>
      <div>{props.totaldata?.Name}</div>
      {<div>{props.totaldata?.Time}</div>}

      {<div>{props.totaldata?.info}</div>}
    </div>
    <div>
      <span>{props.totaldata?.price}</span>
      {/* <span><Checkbox defaultchecked onChange={handleChange_check} /></span> */}

    </div>
    {/* <div>
      _____________________________
    </div> */}
  </div>
</div>
};

export default TestPost;