'use client'

import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from '@/components/kibo-ui/code-block'
import type { BundledLanguage } from '@/components/kibo-ui/code-block'

export type CodeFile = {
  value: string
  filename: string
  code: string
  language?: string
}

export const FileCodeBlock = ({
  files,
  defaultValue,
}: {
  files: CodeFile[]
  defaultValue?: string
}) => {
  const data = files.map((file) => ({
    value: file.value,
    filename: file.filename,
    language: file.language ?? 'typescript',
    code: file.code,
  }))
  const active = defaultValue ?? data[0]?.value ?? ''

  return (
    <CodeBlock data={data} defaultValue={active}>
      <CodeBlockHeader>
        <CodeBlockFiles />
        <CodeBlockCopyButton aria-label="Copy code" />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem
            key={item.value ?? item.language}
            value={item.value ?? item.language}
          >
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  )
}

const CodeBlockFiles = () => (
  <CodeBlockSelect>
    <CodeBlockSelectTrigger>
      <CodeBlockSelectValue />
    </CodeBlockSelectTrigger>
    <CodeBlockSelectContent>
      {(item) => (
        <CodeBlockSelectItem
          key={item.value ?? item.language}
          value={item.value ?? item.language}
        >
          {item.filename}
        </CodeBlockSelectItem>
      )}
    </CodeBlockSelectContent>
  </CodeBlockSelect>
)
