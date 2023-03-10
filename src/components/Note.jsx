import React from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props){
    return <div className="note" >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={() => {props.deleteNote(props.id)}}><DeleteForeverIcon fontSize="large"/></button>
    </div>
}

export default Note