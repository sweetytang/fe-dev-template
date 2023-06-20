import React, { memo } from "react";
import s from "./index.scss";

const list = Array(10)
  .fill(0)
  .map((_, i: number) => {
    return `task-${i}`;
  });

const TaskList = () => {
  return (
    <div className={s.task}>
      {list.map((item: string, i: number) => {
        return (
          <span key={i} className={s["task-item"]}>
            {item}:{" "}
          </span>
        );
      })}
    </div>
  );
};

export default memo(TaskList);
