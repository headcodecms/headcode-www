import {
  defaultDocsEntry,
  defaultFooter,
  defaultHeader,
  defaultHero,
  defaultHomeDemoLinks,
  defaultHomeRewriteGoals,
  defaultHomeText,
  defaultLlmsTxt,
  defaultLogos,
  defaultMeta,
} from './defaults'
import {
  code,
  demoLinks,
  footer,
  header,
  hero,
  image,
  imageText,
  llmsTxt,
  logos,
  meta,
  rewriteGoals,
  snippet,
  text,
} from './sections'

export const headcodeConfig = {
  collections: [
    {
      slug: 'docs',
      description:
        'Documentation pages with rich text, kibo-ui code blocks, and tabbed snippets.',
      sections: [meta, hero, text, code, snippet, imageText, image],
      defaults: defaultDocsEntry,
    },
    {
      slug: 'pages',
      description: 'General pages like about, contact, legal, and policies.',
      sections: [meta, hero, text, imageText, image],
      defaults: [],
    },
  ],
  globals: [
    {
      slug: 'header',
      description: 'Shared public site header.',
      sections: [header],
      defaults: [defaultHeader],
    },
    {
      slug: 'footer',
      description: 'Shared public site footer.',
      sections: [footer],
      defaults: [defaultFooter],
    },
    {
      slug: 'llms',
      description: 'Agent-readable Markdown served from /llms.txt.',
      sections: [llmsTxt],
      defaults: [defaultLlmsTxt],
    },
    {
      slug: 'home',
      description: 'Homepage for headcodecms.com.',
      sections: [
        meta,
        hero,
        logos,
        rewriteGoals,
        demoLinks,
        imageText,
        image,
        text,
      ],
      defaults: [
        defaultMeta,
        defaultHero,
        defaultLogos,
        defaultHomeRewriteGoals,
        defaultHomeDemoLinks,
        defaultHomeText,
      ],
    },
  ],
}
