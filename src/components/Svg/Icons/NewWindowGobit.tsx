/**
 * @author [Life]
 * @create date 2021-04-14 09:04:54
 * @modify date 2021-04-14 09:04:54
 * @desc [description]
 */

import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 17" {...props}>
            <g />

      <path
        // fill="currentColor"
        d="M15 2v7.5h-1v-5.668l-9.334 9.334-0.707-0.707 9.459-9.459h-5.918v-1h7.5zM11 16h-10v-10h6.574v-1h-7.574v12h12v-7.714h-1v6.714z"
      />
    </Svg>
  );
};

export default Icon;
