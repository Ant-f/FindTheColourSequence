import { Map } from "immutable";
import { Colour } from "../src/model/colour";
import * as colourSelect from "./sass/colour-select.scss";
import * as sequenceSegments from "./sass/sequence-segments.scss";

export const sequenceSegmentsMap = Map<Colour, string>({
  [Colour.Black]: sequenceSegments.black,
  [Colour.Blue]: sequenceSegments.blue,
  [Colour.Green]: sequenceSegments.green,
  [Colour.None]: sequenceSegments.none,
  [Colour.Orange]: sequenceSegments.orange,
  [Colour.Purple]: sequenceSegments.purple,
  [Colour.Red]: sequenceSegments.red,
  [Colour.White]: sequenceSegments.white,
  [Colour.Yellow]: sequenceSegments.yellow,
});

export const colourSelectWrapperMap = Map<Colour, string>({
  [Colour.Black]: colourSelect.blackWrapper,
  [Colour.Blue]: colourSelect.blueWrapper,
  [Colour.Green]: colourSelect.greenWrapper,
  [Colour.None]: colourSelect.noneWrapper,
  [Colour.Orange]: colourSelect.orangeWrapper,
  [Colour.Purple]: colourSelect.purpleWrapper,
  [Colour.Red]: colourSelect.redWrapper,
  [Colour.White]: colourSelect.whiteWrapper,
  [Colour.Yellow]: colourSelect.yellowWrapper,
});

export const colourSelectInnerMap = Map<Colour, string>({
  [Colour.Black]: colourSelect.blackInner,
  [Colour.Blue]: colourSelect.blueInner,
  [Colour.Green]: colourSelect.greenInner,
  [Colour.None]: colourSelect.noneInner,
  [Colour.Orange]: colourSelect.orangeInner,
  [Colour.Purple]: colourSelect.purpleInner,
  [Colour.Red]: colourSelect.redInner,
  [Colour.White]: colourSelect.whiteInner,
  [Colour.Yellow]: colourSelect.yellowInner,
});
