import type { SVGProps } from "react";

const SvgMovie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 10H5.76L4 6.47V18h16z" opacity={0.3} />
    <path d="M2.01 6 2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2M4 6.47 5.76 10H20v8H4z" />
  </svg>
);

export { SvgMovie };