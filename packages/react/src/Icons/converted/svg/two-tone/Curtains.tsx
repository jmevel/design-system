import type { SVGProps } from "react";

const SvgCurtains = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M6 13.14V19h3.94c-.3-2.93-1.89-5.27-3.94-5.86M9.94 5H6v5.86C8.05 10.27 9.64 7.93 9.94 5M14.06 19H18v-5.86c-2.05.59-3.64 2.93-3.94 5.86M18 10.86V5h-3.94c.3 2.93 1.89 5.27 3.94 5.86"
      opacity={0.3}
    />
    <path d="M20 19V3H4v16H2v2h20v-2zM6 5h3.94c-.3 2.93-1.89 5.27-3.94 5.86zm0 14v-5.86c2.05.58 3.64 2.93 3.94 5.86zm5.95 0c-.26-3.06-1.72-5.65-3.76-7 2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7-2.04 1.35-3.5 3.94-3.76 7zM18 19h-3.94c.3-2.93 1.89-5.27 3.94-5.86zm0-8.14c-2.05-.58-3.64-2.93-3.94-5.86H18z" />
  </svg>
);

export { SvgCurtains };