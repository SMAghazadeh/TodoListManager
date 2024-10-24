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

export const Dialogs = ({ subject, role }) => {
  const { isOpenDialogAddTodo, changeStatusDialogAddTodo } = useDialog();

  return (
    <>
      <Dialog
        open={isOpenDialogAddTodo}
        onOpenChange={changeStatusDialogAddTodo}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{subject}</DialogTitle>
            <DialogDescription>
              {role === "AddTodo" ? <AddTodo /> : <></>}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
