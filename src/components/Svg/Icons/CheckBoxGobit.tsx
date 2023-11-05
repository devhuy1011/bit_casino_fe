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
        d="M14 5.761h1v10.239h-14v-14h8.393v1h-7.393v12h12v-9.239zM4.854 8.146l-0.708 0.708 3.434 3.434 7.587-11.512-0.835-0.551-6.912 10.488-2.566-2.567z"
      />
    </Svg>
  );
};

export default Icon;
