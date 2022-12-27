import store from "../../app/store";
import { append, destroy} from "./modalSlice";
import { useSelector } from "react-redux";

export const useModals = () => useSelector((state) => state.modal.modals);
export const createModal = (data = false) =>
  store.dispatch(
    append({
      data
    })
  );
export const destroyModal = () => store.dispatch(destroy());

