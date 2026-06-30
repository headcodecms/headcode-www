import type { CodeData } from '@/headcode/sections'
import { FileCodeBlock } from '../_components/code-block'
import { Markdown } from '../_components/markdown'
import { compactMarkdown } from './render-utils'
import { Container } from '../_components/container'

export const CodeSection = ({
  data,
  headcode,
}: {
  data: CodeData
  headcode?: string
}) => (
  <section className="pb-20 md:pb-28" data-headcode={headcode}>
    <Container className="flex flex-col gap-6">
      <Markdown content={data.beforeContent} />
      <div className="mx-auto w-full max-w-3xl">
        <FileCodeBlock files={data.files} />
      </div>
      <Markdown content={data.afterContent} />
    </Container>
  </section>
)

export const renderCodeMarkdown = (data: CodeData) =>
  compactMarkdown([
    data.beforeContent,
    data.files
      .map(
        (file) =>
          `### ${file.filename}\n\n\`\`\`${file.language}\n${file.code}\n\`\`\``,
      )
      .join('\n\n'),
    data.afterContent,
  ])
