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
        d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z"
      />
    </Svg>
  );
};

export default Icon;
