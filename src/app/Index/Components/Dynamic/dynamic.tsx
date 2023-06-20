import React, { ReactElement, memo } from "react";
import s from "./index.scss";

const Dynamic = (): ReactElement => {
  return <div className={s.cat}>Fly</div>;
};

export default memo(Dynamic);
