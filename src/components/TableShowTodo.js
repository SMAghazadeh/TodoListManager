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

export const TableShowTodo = ({ node }) => {
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
                <TableRow>
                    <TableCell>{node.title}</TableCell>
                    <TableCell>{node.description}</TableCell>
                    <TableCell>{node.status === true ? 'Done!' : 'doing'}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
