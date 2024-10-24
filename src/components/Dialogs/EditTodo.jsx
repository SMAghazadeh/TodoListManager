"use client";
import { Todo } from "@/lib/store/Todo";
import { useDialog } from "@/lib/store/useDialog";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export const EditTodo = () => {
  const { TodoList, EditToDo } = Todo();
  const { IdSelectedTodo } = useDialog();

  const [information, setInformation] = useState();
  const [editeTitle, setEditTitle] = useState();
  const [editDescription, setEditDescription] = useState();

  useEffect(() => {
    TodoList.find((item) => {
      if (item.id === IdSelectedTodo) {
        setInformation(item);
      }
    });
  }, [IdSelectedTodo, TodoList]);

  return (
    <>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        placeholder={information?.title}
        onChange={(e) => {
          setEditTitle(e.target.value);
        }}
        value={editeTitle}
      />

      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        placeholder={information?.description}
        onChange={(e) => {
          setEditDescription(e.target.value);
        }}
        value={editDescription}
      />

      <Button
        onClick={() => {
          EditToDo(IdSelectedTodo, editeTitle, editDescription)
        }}
      >
        Save Change
      </Button>
    </>
  );
};
