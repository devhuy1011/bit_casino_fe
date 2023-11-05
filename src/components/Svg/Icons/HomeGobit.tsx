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
        d="M14 16h-3v-6h-5v6h-3v-9h-1v10h13v-10h-1v9zM7 16v-5h3v5h-3zM16.796 6.473l-0.592 0.807-7.704-5.66-7.704 5.658-0.592-0.806 8.296-6.092 8.296 6.093z"
      />
    </Svg>
  );
};

export default Icon;
