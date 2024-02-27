import { EventHandler, MouseEventHandler, useState } from "react";
import { Navbar } from "./Navbar";
import { TodoForm } from "./TodoForm";

export function App() {
  return (
    <>
      <Navbar />
      <TodoForm />
    </>
  );
}
