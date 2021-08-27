import DefaultLink from "next/link";

export default function Link({
  children,
  href,
  className,
  as,
}: {
  children?: React.ReactNode;
  href?: string | undefined;
  className?: string;
  as?: string | undefined;
}) {
  return (
    <DefaultLink href={href} as={as}>
      <a href={href} className={className}>
        {children}
      </a>
    </DefaultLink>
  );
}
