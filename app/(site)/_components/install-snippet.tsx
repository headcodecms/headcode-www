'use client'

import * as React from 'react'

import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from '@/components/kibo-ui/snippet'

export type InstallTab = {
  value: string
  label: string
  command: string
}

export const InstallSnippet = ({ tabs }: { tabs: InstallTab[] }) => {
  const [active, setActive] = React.useState(tabs[0]?.value ?? '')
  const activeCommand = tabs.find((tab) => tab.value === active)?.command ?? ''

  return (
    <Snippet value={active} onValueChange={setActive}>
      <SnippetHeader>
        <SnippetTabsList>
          {tabs.map((tab) => (
            <SnippetTabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        <SnippetCopyButton value={activeCommand} aria-label="Copy snippet" />
      </SnippetHeader>
      {tabs.map((tab) => (
        <SnippetTabsContent key={tab.value} value={tab.value}>
          {tab.command}
        </SnippetTabsContent>
      ))}
    </Snippet>
  )
}
