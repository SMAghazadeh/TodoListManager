import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useDialog = create(
    immer((set) => ({
        isOpenDialogAddTodo : false,



        changeStatusDialogAddTodo : () => set((state) => {state.isOpenDialogAddTodo = !isOpenDialogAddTodo})
    }))
)