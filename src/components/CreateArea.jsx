import React, { useState } from "react";

function CreateArea(props) {
  const [note, addNotes] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;
    addNotes((prevValue) => {
      // if (name === "title") {
      //   return {
      //     title: value,
      //     content: prevValue.content
      //   };
      // } else {
      //   return {
      //     title: prevValue.title,
      //     content: value
      //   };
      // }
      return { ...prevValue, [name]: value };
    });
  }
  function submit(event) {
    props.onAdd(note);
    addNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
