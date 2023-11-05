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
      fill="currentColor" 
      d="M16 3v2h-15v-2h15zM1 10h15v-2h-15v2zM1 15h15v-2h-15v2z" />
    </Svg>
  );
};

export default Icon;
