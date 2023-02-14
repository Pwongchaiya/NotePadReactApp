
import React from "react"
import Header from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import CreateArea from "./CreateArea"

function App() {

    const [notesArray, setNoteArray] = React.useState([])
    const [noteObject, setNoteObject] = React.useState({
        title: "",
        content: ""
    })

    function handleAdd(event){
        const {value, name} = event.target
        setNoteObject(prev => {
          return  {
            ...prev,
            [name]: value}
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setNoteArray(notesArray.concat(noteObject))
        setNoteObject({
            title: "",
            content: ""
        })
    }

    function handleDelete(id) {
        setNoteArray(prev => {
            return prev.filter((note, index) => {
                return index !== id
            })
        })
    }

    return <div>
        <Header />
        <CreateArea
            handleSubmit={handleSubmit}
            handleAdd={handleAdd}
            title={noteObject.title}
            content={noteObject.content}
        />
        {notesArray.map((entry, index) => 
        <Note
            key ={index}
            id = {index}
            title = {entry.title}
            content = {entry.content}
            deleteNote = {handleDelete}
        />
        )}
        <Footer />
    </div>
}

export default App