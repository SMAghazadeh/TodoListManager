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
    }),


    RemoveTodo: (index) => set((state) => {
        state.TodoList = state.TodoList.filter((_,i)=> i !== index )
    }),

    EditToDo: (id, title, description) => set((state) => {
        const item = state.TodoList.find((item) => item.id === id);
        if (item) {
            item.title = title;
            item.description = description;  
        }
    }),


})))