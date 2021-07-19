import DefaultLink from 'next/link'


export default function Link({ children, href, className }) {
  return <DefaultLink href={href}>
      <a href={href} className={className}>
        {children}
      </a>
      </DefaultLink>
}