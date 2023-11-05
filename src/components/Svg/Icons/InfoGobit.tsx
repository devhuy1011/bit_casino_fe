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
        d="M10.8 14.276v1h-4.6v-1h1.8v-7.431h-1.75v-1h2.75v8.431h1.8zM7.988 4.045c0.848 0 1.532-0.686 1.532-1.532 0-0.847-0.685-1.534-1.532-1.534-0.849 0-1.534 0.687-1.534 1.534 0 0.846 0.686 1.532 1.534 1.532z"
      />
    </Svg>
  );
};

export default Icon;
