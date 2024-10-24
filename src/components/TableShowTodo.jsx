import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Todo } from '@/lib/store/Todo'

export const TableShowTodo = () => {
    const { TodoList } = Todo()
    console.log(TodoList);
    return (
        <Table>
            <TableCaption>Todo list</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {TodoList.map((node) => (
                    <React.Fragment key={node.id}>
                        <TableRow>
                            <TableCell>{node.title}</TableCell>
                            <TableCell>{node.description}</TableCell>
                            <TableCell>{node.status === true ? 'Done!' : 'doing'}</TableCell>
                        </TableRow>
                    </React.Fragment>
                ))}
            </TableBody>
        </Table>
    )
}
