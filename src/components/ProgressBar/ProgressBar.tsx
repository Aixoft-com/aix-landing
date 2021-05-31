import React from "react";
import "./ProgressBar.scss"

interface Props {
    label: String,
    percent: number
}

export const ProgressBar: React.FC<Props> = (props: Props) => {
    const {label, percent} = props;
    return (
      <div className="progress">
        <div className="progress-label">{label}</div>
        <div className="progress-content">
          <span style={{width: `${percent}%`}} />
        </div>
      </div>
    )
}
