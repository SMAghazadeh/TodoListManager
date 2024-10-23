import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

export const Todo = create(immer((set) => ({
    //Todo Object
    TodoList: [
        {
            id: 0,
            title: 'Programming',
            description: 'javaScripts',
            status : true

        }
    ],


    AddToDo: (title, description) => set((state) => {
        state.TodoList.push({
            title: title,
            description: description
        })
    })




})))