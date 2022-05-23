import * as React from "react";
import TestPost from "./TestPost";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Alert, Checkbox } from "@mui/material";
import { Paper } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import { useRecoilState } from "recoil";
import { selected } from "./atom";
import { Construction } from "@mui/icons-material";


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


export default function ControlledAccordions(props) {
  const [_selected, setSelected] = useRecoilState(selected);
  const result_f = _selected.map(
    (item, index) => {
      return
      <div>
        {item}
      </div>
    }
  )
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange_check = (event, item) => {


    var newArry
    // var newArry = _selected.concat([item])
    // setSelected(newArry, _selected);
    console.log(newArry)
    console.log(_selected)

    function getIndex(ob) {
      return _selected.findIndex(obj => obj.Name === ob)

    }
    
    // console.log("skjgh")
    // console.log(item.Name)
    // console.log(getIndex(item.Name))
    // console.log("liiiiiiiiiiiiiiiiiiksdfdkherklhjjjjjjjjjjjjjjjjioheor")
    // //  setShow(!show)
    // setShow(false);


    // const fun = (itemchecked)=>{
    //  return [item]===[itemchecked]
    // }
    // if (typeof 5 == 'number')
    //   console.log("klsg");
    // if (typeof (_selected.find(fun)) === 'undefined') {
    //   console.log("no")
    // }
    // else {
    //   console.log("yy")
    // }
    if (event.target.checked) {
      console.log(event.target.checked)
      console.log(Array_haircuts[0].Name);
      // if(newArry.indexOf([item]) !== -1){

      //   let newArry = _selected.concat([item])
      //   setSelected(newArry, _selected);
      // }
      // { document.querySelector(".p1").innerHTML = Array_haircuts[1].Name }

      // console.log([item])
      // console.log((_selected.includes([item])))
      //       if ( (_selected.includes([item])) === true) {
      //         console.log("y")
      //       }
      console.log(newArry)
      console.log(_selected)
      console.log(getIndex(item.Name))
      if (getIndex(item.Name) === -1) {
        newArry = _selected.concat([item])
        setSelected(newArry, _selected);
      }

    } else if (event.target.checked === false) {
      console.log(event.target.checked)
      console.log(Array_haircuts[1].Name);

      // delete newArry[2]
      // console.log(newArry)
      if (getIndex(item.Name) !== -1) {
        const indeToRemove = getIndex(item.Name);
        const p1 = _selected.slice(0, indeToRemove);
        const p2 = _selected.slice(indeToRemove + 1, _selected.length);
        let result = []
        result = result.concat(p1)
        result = result.concat(p2)
        console.log(result)
        setSelected(result, _selected)

      }
    }

    console.log(_selected)

    console.log(newArry)


  };
  console.log(_selected);
  const finalSelectedItems = _selected.map(
    (item, index) => {
      return
      <div>
        <div>
          <TestPost totaldata={item}></TestPost>
        </div>
      </div>
    }
  )
  const result_Arry = Array_haircuts.map(
    (item, index) => {
      return <div className="lef item_name">
        <div >

          <div>
            <TestPost totaldata={item}></TestPost>
          </div>

          <div>
            <Checkbox defaultchecked onChange={(e) => handleChange_check(e, item)} />

          </div>
        </div>
      </div>

    }
  )

  console.log(_selected)
  const resultPrintarray = _selected.map(
    (item, index) => {
      return <div>

        <TestPost totaldata={item}></TestPost>
      </div>

    }
  )
  console.log(resultPrintarray)



  console.log(finalSelectedItems)

  return (
    <div className="container">
      <div className="lef">
        <div className="row">
          <div className="col-8" >

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  HaircutsI
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {result_Arry}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  All-Over color
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="lef">
                    <div>
                      <div>{Array_haircuts[1].Name}</div>
                      <div>{Array_haircuts[1].Time}</div>

                      <div>{Array_haircuts[1].info}</div>
                    </div>
                    <div>
                      <span>{Array_haircuts[1].price}</span>
                      <span><Checkbox defaultchecked onChange={(e) => handleChange_check(e, Array_haircuts[1])} /></span>
                    </div>
                  </div>

                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  waxing
                </Typography>

              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="lef">
                    <div>
                      <div>{Array_haircuts[2].Name}</div>
                      <div>{Array_haircuts[2].Time}</div>

                      <div>{Array_haircuts[2].info}</div>
                    </div>
                    <div>
                      <span>{Array_haircuts[2].price}</span>
                      <span><Checkbox defaultchecked onChange={handleChange_check} /></span>
                    </div>
                  </div>
                </Typography>

              </AccordionDetails>
            </Accordion>


            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Special Services
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="lef">
                    <div>
                      <div>{Array_haircuts[3].Name}</div>
                      <div>{Array_haircuts[3].Time}</div>

                      <div>{Array_haircuts[3].info}</div>
                    </div>
                    <div>
                      <span>{Array_haircuts[3].price}</span>
                      <span><Checkbox defaultchecked onChange={handleChange_check} /></span>
                    </div>
                  </div>
                </Typography>

              </AccordionDetails>
            </Accordion>
          </div>

          <div class="col-4 ">
            <Paper elevation={3} className="mt  card_width">
              <div>
                <h4 ClassName="ml-10">Hair Salon </h4>
              </div>
              <Alert severity="info">
                <AlertTitle>info</AlertTitle>
                This is an info alert — <strong>check it out!</strong>
              </Alert>
              {finalSelectedItems}

              {<div className="p1">  mnhg
                {/* {finalSelectedItems} */}
                {resultPrintarray}
              </div>}

            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}
