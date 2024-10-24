'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { useDialog } from '@/lib/store/useDialog'

export const CreateTodo = () => {
    const { changeStatusDialogAddTodo ,changeStatusDialogEditTodo} = useDialog()
    return (
        <>
            <Button
                onClick={() => {
                    changeStatusDialogAddTodo()
                }}
            >Add</Button>
           
        </>
    )
}
