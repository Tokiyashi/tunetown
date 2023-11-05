import { store } from "@/store"
import { changeMode } from "@/store/slices/modeSlicet"

export function ChangeMode() {
  store.dispatch(changeMode());
}