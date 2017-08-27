import * as React from "react";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import * as rotations from "../../stylesheets/sass/font-rotations.scss";
import classes from "../helpers/classes";

export default class extends React.PureComponent {

  public render() {
    return (
      <div className={classes(lettering.gameOverTextContainer, lettering.titleBadge)}>
        <div className={lettering.winText}>
          <span className={classes(rotations.rotate00, lettering.c)}>C</span>
          <span className={classes(rotations.rotate01, lettering.o)}>o</span>
          <span className={classes(rotations.rotate02, lettering.n)}>n</span>
          <span className={classes(rotations.rotate03, lettering.g)}>g</span>
          <span className={classes(rotations.rotate04, lettering.r)}>r</span>
          <span className={classes(rotations.rotate05, lettering.a)}>a</span>
          <span className={classes(rotations.rotate06, lettering.t)}>t</span>
          <span className={classes(rotations.rotate07, lettering.u)}>u</span>
          <span className={classes(rotations.rotate08, lettering.l)}>l</span>
          <span className={classes(rotations.rotate09, lettering.a)}>a</span>
          <span className={classes(rotations.rotate10, lettering.t)}>t</span>
          <span className={classes(rotations.rotate11, lettering.i)}>i</span>
          <span className={classes(rotations.rotate12, lettering.o)}>o</span>
          <span className={classes(rotations.rotate13, lettering.n)}>n</span>
          <span className={classes(rotations.rotate14, lettering.s)}>s</span>
          <span className={classes(rotations.rotate15, lettering.exclaimation)}>!</span>
        </div>

        <span>(Click to Continue)</span>
      </div>
    );
  }
}
