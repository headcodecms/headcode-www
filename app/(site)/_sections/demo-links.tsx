import Link from 'next/link'
import {
  Bot,
  FileText,
  Globe,
  LayoutDashboard,
  Rss,
  Terminal,
  Waypoints,
} from 'lucide-react'

import type { DemoLinksData } from '@/headcode/sections'
import { cn } from '@/lib/utils'
import { Markdown } from '../_components/markdown'
import { Container } from '../_components/container'
import { compactMarkdown, markdownLink, markdownList } from './render-utils'

const icons = {
  globe: Globe,
  'file-text': FileText,
  waypoints: Waypoints,
  rss: Rss,
  'layout-dashboard': LayoutDashboard,
  bot: Bot,
  terminal: Terminal,
}

const getCardClassName = (size: string) =>
  cn(
    'group border-border bg-background hover:border-foreground/25 flex min-h-40 flex-col justify-between rounded-lg border p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md lg:h-full lg:min-h-0',
    size === 'featured' && 'sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-5',
    size === 'wide' && 'lg:col-span-2',
  )

export const DemoLinksSection = ({
  data,
  headcode,
}: {
  data: DemoLinksData
  headcode?: string
}) => (
  <section className="bg-background py-18 md:py-24" data-headcode={headcode}>
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
          {data.title}
        </h2>
        <div className="text-muted-foreground mt-5 text-base leading-relaxed md:text-lg">
          <Markdown content={data.intro} />
        </div>
      </div>

      <div className="mt-10 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:auto-rows-[10.5rem] lg:grid-cols-6">
        {data.cards.map((card, index) => {
          const Icon = icons[card.icon as keyof typeof icons] ?? Globe
          const isFeatured = card.size === 'featured'

          return (
            <Link
              key={`${card.link.url}-${index}`}
              href={card.link.url}
              target={card.link.openInNewWindow ? '_blank' : undefined}
              rel={
                card.link.openInNewWindow ? 'noreferrer noopener' : undefined
              }
              className={getCardClassName(card.size)}
            >
              <span
                className={cn(
                  'border-border bg-muted text-foreground group-hover:bg-foreground group-hover:text-background flex size-10 items-center justify-center rounded-md border transition-colors',
                  isFeatured && 'lg:size-12',
                )}
              >
                <Icon
                  className={cn('size-4', isFeatured && 'lg:size-5')}
                  aria-hidden="true"
                />
              </span>
              <span>
                <span
                  className={cn(
                    'block text-base font-semibold tracking-tight',
                    isFeatured && 'lg:text-xl',
                  )}
                >
                  {card.link.title}
                </span>
                <span
                  className={cn(
                    'text-muted-foreground mt-1.5 block text-xs leading-relaxed',
                    isFeatured && 'lg:text-sm',
                  )}
                >
                  {card.description}
                </span>
              </span>
            </Link>
          )
        })}
      </div>
    </Container>
  </section>
)

export const renderDemoLinksMarkdown = (data: DemoLinksData) =>
  compactMarkdown([
    `## ${data.title}`,
    data.intro,
    data.cards.length > 0
      ? compactMarkdown([
          '### Demo paths worth opening',
          markdownList(
            data.cards.map(
              (card) =>
                `**${card.link.title}:** ${markdownLink(
                  card.link.title,
                  card.link.url,
                )} ${card.description}`,
            ),
          ),
        ])
      : null,
  ])
