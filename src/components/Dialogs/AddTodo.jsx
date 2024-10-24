'use client'
import { Todo } from "@/lib/store/Todo";
import React, { useState } from "react";


import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const AddTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { AddToDo ,AddUniqueID} = Todo();
  return (
    <>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <Label htmlFor="description">Add Description</Label>
      <Textarea
        id="description"
        placeholder="Write a description of your work"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <Button onClick={() => {
        AddToDo(title, description)
        AddUniqueID()
        }}>Add</Button>
    </>
  );
};

export default AddTodo;
