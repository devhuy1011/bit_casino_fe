/**
 * @author [Life]
 * @create date 2021-04-14 09:27:06
 * @modify date 2021-04-14 09:27:06
 * @desc [description]
 */
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 17" {...props}>
            <g />

      <path d="M16.354 5.075l-7.855 7.854-7.853-7.854 0.707-0.707 7.145 7.146 7.148-7.147 0.708 0.708z" />
    </Svg>
  );
};

export default Icon;
