'use client'
import { Todo } from '@/lib/store/Todo'
import React from 'react'
import { TableShowTodo } from "@/components/TableShowTodo";
import { CreateTodo } from './CreateTodo';
export const ShowTodo = () => {
  const { TodoList } = Todo()

  console.log(TodoList);
  return (
    <>

      {TodoList.map((item) => (
          <TableShowTodo node={item} />
        )
      )}
      <CreateTodo />
    </>
  )
}
