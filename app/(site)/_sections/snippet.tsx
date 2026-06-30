import type { SnippetData } from '@/headcode/sections'
import { InstallSnippet } from '../_components/install-snippet'
import { Markdown } from '../_components/markdown'
import { compactMarkdown } from './render-utils'
import { Container } from '../_components/container'

export const SnippetSection = ({
  data,
  headcode,
}: {
  data: SnippetData
  headcode?: string
}) => (
  <section className="pb-20 md:pb-28" data-headcode={headcode}>
    <Container className="flex flex-col gap-6">
      <Markdown content={data.beforeContent} />
      <div className="mx-auto w-full max-w-3xl">
        <InstallSnippet tabs={data.tabs} />
      </div>
      <Markdown content={data.afterContent} />
    </Container>
  </section>
)

export const renderSnippetMarkdown = (data: SnippetData) =>
  compactMarkdown([
    data.beforeContent,
    data.tabs
      .map((tab) => `### ${tab.label}\n\n\`\`\`bash\n${tab.command}\n\`\`\``)
      .join('\n\n'),
    data.afterContent,
  ])
