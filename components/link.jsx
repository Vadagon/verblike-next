import DefaultLink from 'next/link'


export default function Link({ children, href, className, as }) {
  return <DefaultLink href={href} as={as}>
      <a href={href} className={className}>
        {children}
      </a>
      </DefaultLink>
}