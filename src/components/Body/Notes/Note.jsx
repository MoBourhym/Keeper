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
  {
    id: 9,
    title: "Recipes", content: "Pasta, pizza, salad, and smoothie.",

  },
  {
    id: 10,
    title: "Books to Read",
    content: "The Great Gatsby, To Kill a Mockingbird, 1984, and Moby Dick.",
  },
  {
    id: 11,
    title: "Weekend Plans",
    content: "Hiking, movie night, and dinner with friends.",
  },
  {
    id: 12,
    title: "Project Ideas",
    content: "Build a weather app, create a personal blog, and develop a game.",
  },
  {
    id: 13,
    title: "Learning Goals",
    content: "Master React, learn TypeScript, and explore GraphQL.",
  },
  {
    id: 14,
    title: "Gardening Tips",
    content: "Water plants regularly, use compost, and prune dead leaves.",
  },
  {
    id: 15,
    title: "Favorite Quotes",
    content: "The only limit to our realization of tomorrow is our doubts of today.",
  },
  {
    id: 16,
    title: "Travel Bucket List",
    content: "Japan, Australia, New Zealand, and Iceland.",
  },
  {
    id: 17,
    title: "Music Playlist",
    content: "Rock, jazz, classical, and pop.",
  },
  {
    id: 18,
    title: "Cooking Tips",
    content: "Use fresh ingredients, season well, and cook with love.",
  },
  {
    id: 19,
    title: "Fitness Goals",
    content: "Run a marathon, build muscle, and improve flexibility.",
  },
  {
    id: 20,
    title: "Tech Trends",
    content: "AI, blockchain, and quantum computing.",
  }
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
