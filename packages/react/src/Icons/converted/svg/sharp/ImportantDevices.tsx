import type { SVGProps } from "react";

const SvgImportantDevices = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M24 11.01 17 11v11h7zM23 20h-5v-7h5zM22 2H0v16h9v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2zM11.97 9 11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9z" />
  </svg>
);

export { SvgImportantDevices };