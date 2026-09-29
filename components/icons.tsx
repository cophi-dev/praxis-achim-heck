import type { ReactNode, SVGProps } from "react";

function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

export function BadgeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9.5 9 1.7 1.7L14.6 7.4" />
      <path d="M8.6 13.4 7.5 21l4.5-2.6 4.5 2.6-1.1-7.6" />
    </Icon>
  );
}

export function GraduationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z" />
      <path d="M6.5 11.8v4.4c0 1.3 2.5 2.8 5.5 2.8s5.5-1.5 5.5-2.8v-4.4" />
      <path d="M21.5 9.5v5" />
    </Icon>
  );
}

export function ReceiptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M6 3h12v18l-3-1.8-3 1.8-3-1.8L6 21V3Z" />
      <path d="M9 8h6M9 12h6M9 16h3.5" />
    </Icon>
  );
}

export function FilePdfIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M14 3H7.5A1.5 1.5 0 0 0 6 4.5v15A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12.5h6M9 16h4" />
    </Icon>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </Icon>
  );
}

export function ArrowOutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </Icon>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </Icon>
  );
}
