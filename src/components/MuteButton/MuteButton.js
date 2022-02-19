import react,{useState} from "react";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
require('../../index.css')

const MuteButton = (props)=>{

    return(
        <div>
        <Button className="muteBtn" variant="outlined" onClick={props.fn} startIcon={<VolumeOffIcon />}>
            Mute
        </Button>        
        </div>
    )
}

export default MuteButton;