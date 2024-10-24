import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useDialog = create(
    immer((set) => ({
        isOpenDialogAddTodo: false,
        isOpenDialogEditTodo: false,
        IdSelectedTodo: null,


       

        changeStatusDialogAddTodo: () => set((state) => { state.isOpenDialogAddTodo = !state.isOpenDialogAddTodo }),
        changeStatusDialogEditTodo: () => set((state) => { state.isOpenDialogEditTodo = !state.isOpenDialogEditTodo }),
        setIdSelectedTodo : (id) => set((state) => {state.IdSelectedTodo = id})
    }))
)