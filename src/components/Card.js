import { Alert } from "@mui/material";
import { Paper } from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';

const Card =()=>{
    return(
        <div>
<Paper elevation={3}  className="mt card_width">
    <div>
    <h4 ClassName="ml-10">Hair Salon </h4>

    </div>
    <Alert severity="info">
  <AlertTitle>info</AlertTitle>
  This is an info alert — <strong>check it out!</strong>
</Alert>
    </Paper>
    
        </div>
    )
    }


export default Card;