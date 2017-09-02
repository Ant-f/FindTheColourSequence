import * as React from "react";
import * as styles from "../../stylesheets/sass/target-sequence.scss";
import SequenceAttempt from "../components/sequence-attempt";
import classes from "../helpers/classes";
import { IStateProps } from "../props/target-sequence-props";
import TitleBadge from "./title-badge";

const getShieldClasses = (isGameOver: boolean): string => {
  const classNames = classes(
    styles.shield,
    isGameOver ? styles.shieldOpen : null);

  return classNames;
};

export default class extends React.Component<IStateProps> {
  public render() {
    return (
      <div className={styles.shieldedContent}>
        <SequenceAttempt
          attemptId={6}
          colours={this.props.targetSequence}>
        </SequenceAttempt>

        <div className={getShieldClasses(this.props.isGameOver)}>

          {/* Webkit hack to prevent shield edge from flickering during animation */}
          <div style={{
            background: "transparent",
            height: "100%",
            left: "0em",
            opacity: 0.5,
            position: "absolute",
            width: "1000%",
          }} />

          <div className={styles.shieldEdge} />
          <div className={styles.rotate}>
            <TitleBadge />
          </div>
        </div>
      </div>
    );
  }
}
