import type { SVGProps } from "react";

const SvgSignLanguage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="m12.49 13-1.39-2.7L12.49 9 19 15.2V24H4.5v-2H10v-1H3v-2h7v-1H2v-2h8v-1H3.5v-2zm-.71-5.88c-.84.4-1.17.62-1.63 1.19L6.76 4.74l1.45-1.38zM9.64 9.21a3.46 3.46 0 0 0-.2 1.79h-.86L5.62 7.89l1.45-1.38zm12.34 3.13L22 3.35l-1.9-.1-1 2.86L13.3 0l-1.45 1.38 4.09 4.3-.73.69L9.74.64 8.3 2l3.36 3.53 1.06 1.11 2.65 2.33 5.08 4.83z" />
  </svg>
);

export { SvgSignLanguage };