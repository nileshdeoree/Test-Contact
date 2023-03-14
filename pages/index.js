// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   const handleClick = ()=>{

//   }
//   return (
//     <>
//       <div>
//         <form action="submit">
//           <input type="text" onChange={onChange}/>
//           <button type='submit' onClick={handleClick}>Submit</button>
//         </form>
//       </div>
//     </>
//   )
// }


import React, { useState } from 'react'

const Home = () => {

  const [note, setNote] = useState({ title: "" })
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title);
    setNote({ title: "" })
    alert("Added Successfully", "success")
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const addNote = async (title) => {
    const response = await fetch(`http://localhost:3000/api/addcontact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title})
    });

  }

  return (
    <div className="">
      <h2>Add a Note</h2>
      <form className="">
        <div className="">
          <label htmlFor="title" className="">Title</label>
          <input type="text" className="" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required />
        </div>

        <button disabled={note.title.length < 5} type="submit" className="" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default Home