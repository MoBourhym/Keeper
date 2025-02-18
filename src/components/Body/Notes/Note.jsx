import React from "react";

const fakeNotes = [
  {
    id: 1,
    title: "Meeting Notes",
    content: "Discussed project timeline and deliverables.",
  },
  { id: 2, title: "Shopping List", content: "Milk, eggs, bread, and coffee." },
  {
    id: 3,
    title: "Workout Plan",
    content: "Morning run, weightlifting, and yoga.",
  },
  { id: 4, title: "Ideas", content: "Brainstorm app features and UI design." },
  { id: 5, title: "Reminders", content: "Doctor's appointment at 3 PM." },
  {
    id: 6,
    content: "Atomic Habits, Clean Code, Deep Work.",
  },
  {
    id: 7,
    title: "Daily Goals",
    content: "Finish React project, read 20 pages.",
  },
  {
    id: 8,
    title: "Travel Plan",
    content: "Visit Morocco, explore Marrakech, and try local food.",
  },
];

function Note() {
  return (
    <div className="notes-container">
      {fakeNotes.map((note) => (
        <div className="note" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Note;
