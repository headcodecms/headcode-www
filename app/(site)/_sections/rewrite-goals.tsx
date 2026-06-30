import {
  Code2,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/reui/timeline'
import type { RewriteGoalsData } from '@/headcode/sections'
import { Markdown } from '../_components/markdown'
import { Container } from '../_components/container'
import { compactMarkdown, markdownList } from './render-utils'

const icons = {
  sparkles: Sparkles,
  'pen-tool': PenTool,
  'message-square': MessageSquare,
  'shield-check': ShieldCheck,
  rocket: Rocket,
  'layout-dashboard': LayoutDashboard,
  'file-text': FileText,
  code: Code2,
}

export const RewriteGoalsSection = ({
  data,
  headcode,
}: {
  data: RewriteGoalsData
  headcode?: string
}) => (
  <section
    className="border-border/70 bg-background pt-20 pb-16 md:pt-28 md:pb-22"
    data-headcode={headcode}
  >
    <Container>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            {data.title}
          </h2>
          <div className="text-muted-foreground mt-5 text-base leading-relaxed md:text-lg">
            <Markdown content={data.intro} />
          </div>
        </div>

        <div>
          <Timeline defaultValue={data.items.length} className="gap-0">
            {data.items.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons] ?? Sparkles

              return (
                <TimelineItem
                  key={`${item.title}-${index}`}
                  step={index + 1}
                  className="pb-3.5 last:pb-0"
                >
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border" />
                    <TimelineDate className="font-mono text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </TimelineDate>
                    <TimelineIndicator className="border-border bg-background text-foreground flex size-8 items-center justify-center shadow-sm">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </TimelineIndicator>
                    <div className="border-border/80 bg-card/60 hover:border-foreground/20 rounded-lg border p-4 shadow-sm transition-colors">
                      <TimelineTitle className="text-base font-semibold tracking-tight">
                        {item.title}
                      </TimelineTitle>
                      <TimelineContent className="mt-1.5 text-sm leading-relaxed">
                        {item.description}
                      </TimelineContent>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
              )
            })}
          </Timeline>
        </div>
      </div>

      {data.closing ? (
        <div className="border-border text-muted-foreground mx-auto mt-10 max-w-3xl border-t pt-6 text-center text-base leading-relaxed">
          <Markdown content={data.closing} />
        </div>
      ) : null}
    </Container>
  </section>
)

export const renderRewriteGoalsMarkdown = (data: RewriteGoalsData) =>
  compactMarkdown([
    `## ${data.title}`,
    data.intro,
    data.items.length > 0
      ? compactMarkdown([
          '### The goals of the rewrite',
          markdownList(
            data.items.map((item) => `**${item.title}.** ${item.description}`),
          ),
        ])
      : null,
    data.closing,
  ])
