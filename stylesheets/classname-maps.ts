import { Map } from "immutable";
import { Colour } from "../src/model/colour";
import * as colourSelect from "./sass/colour-select.scss";
import * as sequenceSegments from "./sass/sequence-segments.scss";

export const sequenceSegmentsMap = Map<Colour, string>({
  [Colour.Black]: sequenceSegments.black,
  [Colour.Blue]: sequenceSegments.blue,
  [Colour.DarkBlue]: sequenceSegments.darkBlue,
  [Colour.DarkGreen]: sequenceSegments.darkGreen,
  [Colour.DarkRed]: sequenceSegments.darkRed,
  [Colour.Green]: sequenceSegments.green,
  [Colour.LightBlue]: sequenceSegments.lightBlue,
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
  [Colour.DarkBlue]: colourSelect.darkBlueWrapper,
  [Colour.DarkGreen]: colourSelect.darkGreenWrapper,
  [Colour.DarkRed]: colourSelect.darkRedWrapper,
  [Colour.Green]: colourSelect.greenWrapper,
  [Colour.LightBlue]: colourSelect.lightBlueWrapper,
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
  [Colour.DarkBlue]: colourSelect.darkBlueInner,
  [Colour.DarkGreen]: colourSelect.darkGreenInner,
  [Colour.DarkRed]: colourSelect.darkRedInner,
  [Colour.Green]: colourSelect.greenInner,
  [Colour.LightBlue]: colourSelect.lightBlueInner,
  [Colour.None]: colourSelect.noneInner,
  [Colour.Orange]: colourSelect.orangeInner,
  [Colour.Purple]: colourSelect.purpleInner,
  [Colour.Red]: colourSelect.redInner,
  [Colour.White]: colourSelect.whiteInner,
  [Colour.Yellow]: colourSelect.yellowInner,
});
