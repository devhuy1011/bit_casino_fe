/**
 * @author [Life]
 * @create date 2021-04-14 09:27:32
 * @modify date 2021-04-14 09:27:32
 * @desc [description]
 */

import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 17" {...props}>
            <g />

      <path d="M16.354 11.896l-0.707 0.707-7.147-7.146-7.146 7.146-0.707-0.707 7.853-7.853 7.854 7.853z" />
    </Svg>
  );
};

export default Icon;
