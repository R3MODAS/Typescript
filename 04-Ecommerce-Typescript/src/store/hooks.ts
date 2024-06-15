import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useCartDispatch = useDispatch.withTypes<AppDispatch>();
export const useCartSelector = useSelector.withTypes<RootState>();
