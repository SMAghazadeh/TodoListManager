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

export const Dialogs = ({ subject, role }) => {
  const {
    isOpenDialogAddTodo,
    changeStatusDialogAddTodo,
    isOpenDialogEditTodo,
    changeStatusDialogEditTodo
  } = useDialog();

  return (
    <>
      <Dialog
        open={
          role === "AddTodo"
            ? isOpenDialogAddTodo
            : role === "EditTodo"
            ? isOpenDialogEditTodo
            : false
        }
        onOpenChange={ 
          role === 'AddTodo' 
          ? changeStatusDialogAddTodo 
          : role === 'EditTodo' 
          ? changeStatusDialogEditTodo 
          : false
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{subject}</DialogTitle>
            <DialogDescription>
              {
              role === "AddTodo" 
              ? <AddTodo /> 
              : role === 'EditTodo' 
              ? <EditTodo />
              : <>
              </>
            }
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
