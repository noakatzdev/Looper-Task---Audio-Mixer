import react,{useState} from "react";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
require('./../index.css')

const PlayButton = (props)=>{
    const [clicked, setClick] = useState(false);

    return(
        <div>
        <Button variant="outlined" onClick={props.fn} >
            Play
        </Button>        
        </div>
    )
}

export default PlayButton;