"use client";
import React, { useState } from "react";
import { useDialog } from "@/lib/store/useDialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import AddTodo from "./AddTodo";
import { EditTodo } from "./EditTodo";
import { DeletTodo } from "./DeletTodo";
export const Dialogs = ({ subject, role }) => {
  const {
    isOpenDialogAddTodo,
    changeStatusDialogAddTodo,
    isOpenDialogEditTodo,
    changeStatusDialogEditTodo,
    isOpenDialogDeleteTodo,
    changeStatusDialogDeleteTodo
  } = useDialog();

  return (
    <>
      <Dialog
        open={
          role === "AddTodo"
            ? isOpenDialogAddTodo
            : role === "EditTodo"
            ? isOpenDialogEditTodo
            : role === 'Delete'
            ? isOpenDialogDeleteTodo
            : false

        }
        onOpenChange={
          role === "AddTodo"
            ? changeStatusDialogAddTodo
            : role === "EditTodo"
            ? changeStatusDialogEditTodo
            : role === 'Delete' 
            ? changeStatusDialogDeleteTodo
            : false
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{subject}</DialogTitle>
            <DialogDescription>
              {role === "AddTodo" ? (
                <AddTodo />
              ) : role === "EditTodo" ? (
                <EditTodo />
              ) : role === "Delete" ? (
                <DeletTodo />
              ) : (
                <>j</>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
