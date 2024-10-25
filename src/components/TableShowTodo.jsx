import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Todo } from "@/lib/store/Todo";
import { useDialog } from "@/lib/store/useDialog";

export const TableShowTodo = () => {
  const TodoList = Todo((state) => state.TodoList);
  const {
    setIdSelectedTodo,
    changeStatusDialogEditTodo,
    changeStatusDialogDeleteTodo,
  } = useDialog();

 
 
  return (
    <Table>
      <TableCaption>Todo list</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>NO.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TodoList.map((node , index) => (
          <React.Fragment key={node.id}>
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{node.title}</TableCell>
              <TableCell>{node.description}</TableCell>
              <TableCell>{node.status === true ? "Done!" : "doing"}</TableCell>
              <TableCell>
                <span
                  onClick={() => {
                    setIdSelectedTodo(node.id);
                    changeStatusDialogEditTodo();
                  }}
                >
                  Edit
                </span>
                <br />
                <span
                  onClick={() => {
                    setIdSelectedTodo(node.id);
                    changeStatusDialogDeleteTodo();
                  }}
                >
                  Delete
                </span>
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};
