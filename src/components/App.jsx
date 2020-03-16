import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(note => {
        return (
          <Note key={note.key} titel={note.title} content={note.content} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
