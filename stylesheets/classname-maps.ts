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
  [Colour.Orange]: colourSelect.orangeWrapper,
  [Colour.Purple]: colourSelect.purpleWrapper,
  [Colour.Red]: colourSelect.redWrapper,
  [Colour.White]: colourSelect.whiteWrapper,
  [Colour.Yellow]: colourSelect.yellowWrapper,
});

export const colourSelectButtonMap = Map<Colour, string>({
  [Colour.Black]: colourSelect.blackButton,
  [Colour.Blue]: colourSelect.blueButton,
  [Colour.Green]: colourSelect.greenButton,
  [Colour.Orange]: colourSelect.orangeButton,
  [Colour.Purple]: colourSelect.purpleButton,
  [Colour.Red]: colourSelect.redButton,
  [Colour.White]: colourSelect.whiteButton,
  [Colour.Yellow]: colourSelect.yellowButton,
});
