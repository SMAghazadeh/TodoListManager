'use client'
import { Todo } from '@/lib/store/Todo'
import React from 'react'
import { TableShowTodo } from "@/components/TableShowTodo";
import { CreateTodo } from './CreateTodo';
import { Dialogs } from './Dialogs/Dialogs';
export const ShowTodo = () => {


  return (
    <>

      <TableShowTodo />

      <CreateTodo />
      <Dialogs subject={'Add Todo'} role={'AddTodo'} />
      <Dialogs subject={'Edit Todo'} role={'EditTodo'} />
    </>
  )
}
