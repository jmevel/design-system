import type { SVGProps } from "react";

const SvgNat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M6.82 13H11v-2H6.82C6.4 9.84 5.3 9 4 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c1.3 0 2.4-.84 2.82-2M4 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
    <path d="M22.47 12.4c.27-.2.27-.6 0-.8L19 9v2h-4.05c-.47-4.69-4.16-8.42-8.83-8.94-.6-.06-1.12.4-1.12 1 0 .5.37.93.87.99C9.88 4.48 13 7.87 13 12s-3.12 7.52-7.13 7.95c-.5.06-.87.49-.87.99a1 1 0 0 0 1.11 1c4.67-.52 8.37-4.25 8.83-8.94H19v2z" />
  </svg>
);

export { SvgNat };