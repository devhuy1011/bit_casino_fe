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

      <path d="M16 9h-7v7h-1v-7h-7v-1h7v-7h1v7h7v1z" 
      // fill="currentColor" 
      />
    </Svg>
  );
};

export default Icon;
