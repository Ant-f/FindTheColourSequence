import * as React from "react";
import * as lettering from "../../stylesheets/sass/font-lettering.scss";
import classes from "../helpers/classes";

export default class extends React.PureComponent {

  public render() {
    return (
      <div className={lettering.titleBadge}>
        <p className={lettering.titleBadgeText}>
          <span className={lettering.f}>F</span>
          <span className={lettering.i}>i</span>
          <span className={lettering.n}>n</span>
          <span className={lettering.d}>d</span>

          <span className={classes(lettering.newWord, lettering.t)}>t</span>
          <span className={lettering.h}>h</span>
          <span className={lettering.e}>e</span>
        </p>

        <p className={lettering.titleBadgeText}>
          <span className={lettering.c}>C</span>
          <span className={lettering.o}>o</span>
          <span className={lettering.l}>l</span>
          <span className={lettering.o}>o</span>
          <span className={lettering.u}>u</span>
          <span className={lettering.r}>r</span>

          <span className={classes(lettering.newWord, lettering.s)}>S</span>
          <span className={lettering.e}>e</span>
          <span className={lettering.q}>q</span>
          <span className={lettering.u}>u</span>
          <span className={lettering.e}>e</span>
          <span className={lettering.n}>n</span>
          <span className={lettering.c}>c</span>
          <span className={lettering.e}>e</span>
        </p>
      </div>
    );
  }
}
