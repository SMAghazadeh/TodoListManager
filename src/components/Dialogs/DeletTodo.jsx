"use client";
import { Todo } from "@/lib/store/Todo";
import { useDialog } from "@/lib/store/useDialog";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const DeletTodo = () => {
  const ID = useDialog((state) => state.IdSelectedTodo);
  const { RemoveTodo, TodoList } = Todo();
  const changeStatusDialogDeleteTodo = useDialog((state)=> state.changeStatusDialogDeleteTodo)
  const [Title, setTitle] = useState();

  useEffect(() => {
    TodoList.find((item) => {
      if (item.id === ID) {
        setTitle(item?.title);
      }
    });
  }, [ID, TodoList]);

  const handleDelete = () => {
    const index = TodoList.findIndex((item) => item.id === ID);
    if (index !== -1) {
      RemoveTodo(index); // Call RemoveTodo with the found index
    } else {
      console.warn("Todo item not found");
    }
  };
  return (
    <div>
      <p>{`Are you sure you want to delete the work with ${Title}'s title?`}</p>

      <Button
        onClick={handleDelete}
      >
        DELETE
      </Button>
      <Button
      onClick={()=> changeStatusDialogDeleteTodo()}
      >Cancel</Button>
    </div>
  );
};
