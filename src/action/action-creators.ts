import { createAction } from "redux-actions";
import { Colour } from "../model/colour";
import * as actionTypes from "./action-types";

export const onColourSelected = createAction(
  actionTypes.ColourSelected,
  (colour: Colour): Colour => colour);
