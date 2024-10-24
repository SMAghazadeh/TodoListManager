import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';
export const Todo = create(immer((set) => ({
    //Todo Object
    TodoList: [
        {
            id:uuidv4(),
            title: 'Programming',
            description: 'javaScripts',
            status : true

        },
        
    ],

     CreateID :() => uuidv4() ,
     AddUniqueID: () => set((state) => {
        state.TodoList.forEach((item) => {
            if (!item.id) {
                item.id = state.CreateID();
            }
        });
    }),
    



    AddToDo: (title, description) => set((state) => {
        state.TodoList.push({
            title: title,
            description: description
        })
    })




})))