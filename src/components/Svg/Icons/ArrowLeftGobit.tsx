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
        d="M16 8.972h-12.793l6.146 6.146-0.707 0.707-7.353-7.353 7.354-7.354 0.707 0.707-6.147 6.147h12.793v1z"
        // fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
