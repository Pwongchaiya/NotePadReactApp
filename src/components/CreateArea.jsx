import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = React.useState(false)

    function expanded(){
        setExpanded(true)
    }

    return (
        <div onClick={expanded}>
        <form className="create-note" onSubmit={props.handleSubmit}>
            <input 
                name="title" 
                onChange={props.handleAdd} 
                placeholder="Title" 
                value={props.title} 
                required 
                autoComplete="off"
            />

            {isExpanded && <textarea 
                    name="content" 
                    onChange={props.handleAdd} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? "3" : "1"} 
                    value={props.content} 
                    required
                />
            }
                
            <Zoom in={isExpanded} appear={true}>
                <Fab type="submit" aria-label="add">
                    <AddIcon />
                </Fab>
            </Zoom>
            
        </form>
        </div>
    );
}

export default CreateArea;
