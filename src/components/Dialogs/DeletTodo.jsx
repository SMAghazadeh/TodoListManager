'use client'
import { Todo } from '@/lib/store/Todo'
import { useDialog } from '@/lib/store/useDialog'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export const DeletTodo = () => {
const ID = useDialog((state)=> state.IdSelectedTodo)
const TodoList = Todo((state)=> state.TodoList)
const [Title ,setTitle ] = useState()

console.log(Title);
useEffect(()=>{
  TodoList.find((item)=> {
    if(item.id === ID){
      setTitle(item?.title)
    }
  })
},[ID , TodoList])
  return (
    <>
    <p>{`Are you sure you want to delete the work with ${Title}'s title?`}</p>

    <Button>DELETE</Button>
    <Button>Cancel</Button>
    </>
  )
}
