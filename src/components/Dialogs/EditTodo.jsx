"use client";
import { Todo } from "@/lib/store/Todo";
import { useDialog } from "@/lib/store/useDialog";
import React, { useEffect, useState } from "react";

export const EditTodo = () => {
  const { TodoList } = Todo();
  const { IdSelectedTodo} = useDialog();

  const [information, setInformation] = useState();

  useEffect(()=> {
     TodoList.find((item) => {
      if (item.id === IdSelectedTodo) {
        setInformation(item);
      }
    });
  } ,[IdSelectedTodo ,TodoList])

  console.log(information);


  return (
<>

</>
  )
};
