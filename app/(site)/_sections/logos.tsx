import Link from 'next/link'

import type { LogosData } from '@/headcode/sections'
import { Container } from '../_components/container'
import { markdownLink, markdownList, technologyPaths } from './render-utils'

export const LogoList = ({
  data,
  headcode,
}: {
  data: LogosData
  headcode?: string
}) => (
  <section className="border-y py-10" data-headcode={headcode}>
    <Container>
      {data.eyebrow ? (
        <p className="text-muted-foreground mb-6 text-center font-mono text-xs tracking-widest uppercase">
          {data.eyebrow}
        </p>
      ) : null}
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {data.items.map((item) => {
          const path = item.iconPath || technologyPaths[item.name]
          const content = (
            <>
              {path ? (
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 shrink-0 fill-current"
                  aria-hidden="true"
                >
                  <path d={path} />
                </svg>
              ) : null}
              <span className="font-heading text-sm font-semibold tracking-tight">
                {item.name}
              </span>
            </>
          )

          return (
            <li
              key={item.name}
              className="text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              {item.link.url ? (
                <Link
                  href={item.link.url}
                  target={item.link.openInNewWindow ? '_blank' : undefined}
                  rel={
                    item.link.openInNewWindow
                      ? 'noreferrer noopener'
                      : undefined
                  }
                  aria-label={item.link.title || item.name}
                  className="focus-visible:ring-ring flex items-center gap-2 rounded-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                >
                  {content}
                </Link>
              ) : null}
              {!item.link.url ? (
                <span className="flex items-center gap-2">{content}</span>
              ) : null}
            </li>
          )
        })}
      </ul>
    </Container>
  </section>
)

export const renderLogosMarkdown = (data: LogosData) =>
  [
    `## ${data.eyebrow || 'Built with'}`,
    markdownList(
      data.items.map((item) =>
        item.link.url
          ? markdownLink(item.link.title || item.name, item.link.url)
          : item.name,
      ),
    ),
  ]
    .filter(Boolean)
    .join('\n\n')
