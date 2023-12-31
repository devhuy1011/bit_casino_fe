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
        d="M12.626 6.743l-4.083-6.673-4.211 6.675-4.499-3.833 1.739 13.088h13.855l1.738-13.075-4.539 3.818zM2.447 15l-0.133-1h12.371l-0.133 1h-12.105zM14.818 13h-12.636l-1.015-7.637 3.396 2.892 3.967-6.29 3.851 6.292 3.454-2.906-1.017 7.649z"
      />
    </Svg>
  );
};

export default Icon;
