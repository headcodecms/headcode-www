import {
  code,
  demoLinks,
  footer,
  header,
  hero,
  llmsTxt,
  logos,
  meta,
  rewriteGoals,
  snippet,
  text,
} from './sections'

export const defaultHeader = {
  name: header.name,
  data: {
    brand: 'Headcode CMS',
    navigation: [
      {
        navItem: {
          title: 'Docs',
          url: '/docs',
          openInNewWindow: false,
        },
      },
    ],
    primaryLink: {
      title: 'Admin',
      url: '/admin',
      openInNewWindow: false,
    },
  },
}

export const defaultFooter = {
  name: footer.name,
  data: {
    brand: 'Headcode CMS',
    description:
      'An open-source CMS for websites that humans read and agents can use.',
    navigation: [
      {
        navItem: {
          title: 'Docs',
          url: '/docs',
          openInNewWindow: false,
        },
      },
      {
        navItem: {
          title: 'GitHub',
          url: 'https://github.com/headcodecms/headcodecms',
          openInNewWindow: true,
        },
      },
    ],
    copyright: '(c) 2026 Headcode CMS. All rights reserved.',
  },
}

export const defaultMeta = {
  name: meta.name,
  data: {
    title: 'Headcode CMS - Agentic Web CMS',
    description:
      'Headcode CMS is an open-source CMS for websites that should be readable by humans and usable by agents.',
  },
}

export const defaultHero = {
  name: hero.name,
  data: {
    eyebrow: 'Open source. Agent-readable. Built for real websites.',
    eyebrowIcon: 'sparkles',
    title: 'Agentic Web CMS',
    description:
      'Turn a vibe coded website into a full CMS project with one prompt. Manage structured content, Markdown output, draft/live publishing, and MCP access from the same source of truth.',
    primaryButton: {
      title: 'Read the docs',
      url: '/docs',
      openInNewWindow: false,
    },
    secondaryButton: {
      title: 'View source',
      url: 'https://github.com/headcodecms/headcodecms',
      openInNewWindow: true,
    },
  },
}

export const defaultLogos = {
  name: logos.name,
  data: {
    eyebrow: 'Built with',
    items: [
      {
        name: 'Next.js',
        link: {
          title: 'Next.js',
          url: 'https://nextjs.org/',
          openInNewWindow: true,
        },
        iconPath: '',
      },
      {
        name: 'TypeScript',
        link: {
          title: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          openInNewWindow: true,
        },
        iconPath: '',
      },
      {
        name: 'Convex',
        link: {
          title: 'Convex',
          url: 'https://www.convex.dev/',
          openInNewWindow: true,
        },
        iconPath: '',
      },
      {
        name: 'shadcn/ui',
        link: {
          title: 'shadcn/ui',
          url: 'https://ui.shadcn.com/',
          openInNewWindow: true,
        },
        iconPath: '',
      },
      {
        name: 'MCP',
        link: {
          title: 'Model Context Protocol',
          url: 'https://modelcontextprotocol.io/',
          openInNewWindow: true,
        },
        iconPath: '',
      },
      {
        name: 'Vercel',
        link: {
          title: 'Vercel',
          url: 'https://vercel.com/',
          openInNewWindow: true,
        },
        iconPath: '',
      },
    ],
  },
}

export const defaultHomeRewriteGoals = {
  name: rewriteGoals.name,
  data: {
    title: 'What I wanted Headcode CMS to become',
    intro: `Headcode CMS already existed before this version. Over the last few weeks I decided to rewrite it entirely with Codex. I wrote not a single line of application code by hand.

That became the point of the project.

Headcode CMS should be a CMS for the way websites are starting to get built now: with AI tools creating layouts, changing copy, wiring services, inspecting source, and keeping the system understandable after the first version ships.`,
    items: [
      {
        icon: 'sparkles',
        title: 'Create the website with AI tools',
        description:
          'Let Codex, Claude Code, Cursor, OpenCode, or another agent shape the frontend, sections, and visual language.',
      },
      {
        icon: 'pen-tool',
        title: 'Turn it into a real CMS',
        description:
          'Keep the custom layout, but move editable content into Headcode sections, fields, globals, and collections.',
      },
      {
        icon: 'message-square',
        title: 'Update content from chat',
        description:
          'Use MCP-aware clients to inspect entries, edit drafts, upload images, reorder sections, and prepare changes.',
      },
      {
        icon: 'shield-check',
        title: 'Keep publishing intentional',
        description:
          'Agents can draft freely, but publishing to live stays a deliberate user action.',
      },
      {
        icon: 'rocket',
        title: 'Install and deploy through agents',
        description:
          'Let an AI tool install Headcode, configure Convex, set env vars, and explain the remaining human decisions.',
      },
      {
        icon: 'layout-dashboard',
        title: 'Keep a simple admin UI',
        description:
          'Forms, section lists, image management, versions, and publish buttons remain available for people who want them.',
      },
      {
        icon: 'file-text',
        title: 'Expose Markdown by default',
        description:
          'Public pages can also render compact Markdown for agents.',
      },
      {
        icon: 'code',
        title: 'Stay open and inspectable',
        description:
          'The source lives in headcodecms/headcodecms, so developers and agents can inspect the system.',
      },
    ],
    closing:
      'The rewrite was less about proving that AI can generate code and more about designing a CMS around that reality. The website, the admin, the Markdown output, the MCP tools, and the content model all need to belong to the same system.',
  },
}

export const defaultHomeDemoLinks = {
  name: demoLinks.name,
  data: {
    title: 'Explore the default demo website',
    intro: `The default Headcode CMS install gives you the same kind of site shown at [demo.headcodecms.com](https://demo.headcodecms.com). It is not only a screenshot of the product. It is the starter website: public pages, editable content, Markdown output, admin UI, collections, globals, draft/live behavior, and MCP access.

You can browse the frontend like a normal visitor. You can also sign in to the demo admin with your email address. Add, update, delete, and publish operations are disabled there, but the admin UI is visible so you can inspect the editing experience safely.`,
    cards: [
      {
        icon: 'globe',
        size: 'featured',
        link: {
          title: 'Homepage',
          url: 'https://demo.headcodecms.com',
          openInNewWindow: true,
        },
        description:
          'Shows the default marketing homepage assembled from CMS sections.',
      },
      {
        icon: 'file-text',
        size: 'wide',
        link: {
          title: 'Markdown homepage',
          url: 'https://demo.headcodecms.com/?md',
          openInNewWindow: true,
        },
        description: 'Shows the same homepage as agent-readable Markdown.',
      },
      {
        icon: 'waypoints',
        size: 'wide',
        link: {
          title: 'Docs',
          url: 'https://demo.headcodecms.com/docs',
          openInNewWindow: true,
        },
        description:
          'Shows the default documentation page with install snippets, feature explanations, and code examples.',
      },
      {
        icon: 'file-text',
        size: 'wide',
        link: {
          title: 'Docs as Markdown',
          url: 'https://demo.headcodecms.com/docs?md',
          openInNewWindow: true,
        },
        description: 'Is the version an AI tool can read quickly.',
      },
      {
        icon: 'rss',
        size: 'wide',
        link: {
          title: 'Blog',
          url: 'https://demo.headcodecms.com/blog',
          openInNewWindow: true,
        },
        description:
          'Demonstrates a collection with repeatable entries and blog metadata.',
      },
      {
        icon: 'layout-dashboard',
        size: 'standard',
        link: {
          title: 'Pricing',
          url: 'https://demo.headcodecms.com/pricing',
          openInNewWindow: true,
        },
        description: 'Demonstrates a global page with structured plan data.',
      },
      {
        icon: 'file-text',
        size: 'standard',
        link: {
          title: 'Sitemap XML',
          url: 'https://demo.headcodecms.com/sitemap.xml',
          openInNewWindow: true,
        },
        description: 'Exposes CMS-backed routes for crawlers.',
      },
      {
        icon: 'bot',
        size: 'standard',
        link: {
          title: 'llms.txt',
          url: 'https://demo.headcodecms.com/llms.txt',
          openInNewWindow: true,
        },
        description: 'Gives agents a compact map of the site.',
      },
      {
        icon: 'layout-dashboard',
        size: 'wide',
        link: {
          title: 'Admin UI',
          url: 'https://demo.headcodecms.com/admin',
          openInNewWindow: true,
        },
        description:
          'Lets you sign in and inspect entries, sections, images, and versions in read-only demo mode.',
      },
      {
        icon: 'terminal',
        size: 'standard',
        link: {
          title: 'MCP endpoint',
          url: 'https://demo.headcodecms.com/mcp',
          openInNewWindow: true,
        },
        description:
          'Is the endpoint an authorized AI client would use for content operations.',
      },
    ],
  },
}

export const defaultHomeText = {
  name: text.name,
  data: {
    content: `## Why I created Headcode CMS

I have built websites for more than 20 years. The tools have changed many times, but the recurring problem is strangely stable: small and medium websites need to stay editable after the first launch.

WordPress became the default because it solved a real problem. Clients could edit content. Agencies could ship. A business did not need a developer for every typo.

But the shape of the problem is changing.

Vibe coding is how many websites will start. Agents can create a first version of a site, restyle sections, write copy, and connect services faster than a traditional production process. That is exciting. It is also incomplete.

A website still has to survive after the first burst of generation. People need to update text and images. Businesses need policies, offers, docs, locations, prices, constraints, and next steps to stay accurate. Teams need drafts, publishing, and a clear ownership model. Agents need enough structure and source context to make safe changes.

That is why I created Headcode CMS.

### What Headcode CMS is for

Headcode CMS is for small and medium websites with 10, 20, or 50 pages. It is for agencies, studios, product builders, consultants, local businesses, and people who want the site to remain understandable after launch.

The goal is not to replace every enterprise CMS. The goal is a practical default for websites that should be editable by both people and agents.

Clients should be able to update content through an AI chat client or a simple admin UI. Creators should be able to create and adjust themes with a coding agent. Owners should be able to inspect the source, fork it, and adapt the system to their needs.

Open source matters here. If agents are going to help maintain websites, they need native access to the system they are changing. A CMS that can be inspected, modified, and explained is a better fit for this future than a closed black box.

### Agents first. Mobile second. Desktop third.

The old mental model was desktop versus mobile.

The new model includes agents.

The exact percentages will be wrong. The direction is the point: agents become a real audience, not an edge case. A website still needs to look good on phones and desktops, but it also needs to be readable, explainable, and actionable through AI systems.

That does not mean humans stop mattering. It means the design priority changes. Structured content, Markdown output, MCP access, source context, and clear business information become first-class surfaces.

The next website is not only a page. It is a source of truth for people, search engines, chat clients, and agents.

### The future of web CMS systems

Traditional admin UIs are becoming less central.

AI agents will increasingly use systems through chat clients, MCP tools, structured data, source code, APIs, and markdown views. Humans clicking through a large admin interface will become less common. Admin UIs may still exist, but more like focused expert tools: somewhere between a database browser and a traditional CMS interface.

Headcode CMS keeps the admin UI simple because the important future surface is not only the UI. It is the combination of structured content, source code, service boundaries, Markdown output, and agent access.

Markdown helps agents understand the site. MCP lets authorized agents change it.

### Why websites need more business information

Agent access changes what websites should publish.

The old homepage tries to persuade a visitor. The next homepage also informs an agent that is helping a visitor decide.

Imagine someone asks an AI chat client: "I want to add solar energy to my house. Here is an image and my basic requirements. What are the best options, what does it cost, and where can I get it?"

The agent needs to inspect businesses, products, pricing, local availability, service constraints, policies, reviews, and trustworthy sources. Websites that expose accurate, structured information will be easier to compare, explain, and act on.

This does not mean every website needs another chatbot popup. It means the website itself should become more useful.

A good agent-readable website should expose:

- pricing and packages,
- product and service offerings,
- constraints and availability,
- location data,
- comparison information,
- policies,
- documentation,
- and clear next steps.

Agents do not need another brand manifesto. They need accurate information.

### Design will matter differently

Handmade web design will still matter. But it will matter differently.

For many small and medium websites, the biggest value may shift away from custom decorative layout work and toward content quality, structure, useful integrations, agent-readable access, and clear business information.

AI-generated design that respects a brand and is good enough for the job will be enough for many projects. The bigger question becomes: what does the website know, how reliable is it, and can humans and agents keep it up to date?

The goal is not generic design. The goal is to spend more energy on what the website knows and can do.

### Why still use a CMS?

Why not just let AI generate the website? Why not vibe code the site directly every time content changes?

Because generated websites still need an operating model.

- Every content change should not require a source-code change.
- Multiple editors still need controlled publishing.
- Structured data, such as pricing tables and service packages, should stay structured.
- The same content should render as HTML for humans and Markdown for agents.
- Draft and live versions matter.
- The system should be understandable enough for coding agents to customize safely.

Headcode CMS exists between static website generation and large CMS platforms. It is small enough to understand, structured enough to trust, and open enough to customize.

### Software development and hosting will change too

The future of CMSs is tied to the future of software development.

Agents need access to source code. Open source becomes a strong default because agents can inspect, modify, and explain the system. Hosting platforms that can run software modifications written by agents will become more important.

Development may move away from long feature cycles toward a continuous stream of small, inspectable changes on main, where humans and agents collaborate.

Headcode CMS should reflect that future: source-available, forkable, easy to host, and designed for agent-assisted customization.

### Built for my own projects, open for yours

Headcode CMS was created primarily for my own projects.

I wanted a CMS for small websites with 10, 20, or 50 pages. I wanted clients to update text and images through AI chat clients or a simple admin UI. I wanted themes to be created and adjusted with coding agents. I wanted the source to stay understandable and open.

But I think it can be useful for others too.

Use it, fork it, extend it, and customize it. A forked version may stay small and focused. Another fork may become a multilingual website with thousands of pages. The point is that the system should be open enough for both paths.`,
  },
}

export const defaultLlmsTxt = {
  name: llmsTxt.name,
  data: {
    content: `# Headcode CMS

> Headcode CMS is an open-source CMS for small and medium websites that should be editable by both people and agents.

## Summary

Headcode CMS provides structured website content, draft/live publishing, a simple admin UI, Markdown output, and MCP tools for authenticated AI clients. It is built around the idea that websites should be useful to humans and agents.

## Positioning

- Agentic Web CMS.
- Built for small and medium websites that need controlled editing after launch.
- Open source so owners and coding agents can inspect, fork, and customize the system.
- HTML for humans, Markdown and llms.txt for agents, MCP for authorized edits.
- Intended for sites with practical business information: offers, pricing, docs, locations, constraints, and next steps.

## Key Links

- [Homepage](/?md): Product overview, demo-site references, and CMS philosophy.
- [Documentation](/docs?md): Setup and usage documentation.
- [GitHub](https://github.com/headcodecms/headcodecms): Source code.

## Project Map

- Public site routes: app/(site)/
- Admin routes: app/(admin)/
- CMS config: headcode/config.ts
- Section definitions: headcode/sections.ts
- Default content: headcode/defaults.ts
- Convex services: convex/services.ts
- MCP route: app/(mcp)/[transport]/route.ts

## Editing

- [Admin](/admin): Human content editing UI protected by Convex Auth.
- [MCP](/mcp): Authenticated MCP endpoint for content updates.

Markdown helps agents understand the site. MCP lets authorized agents change it.`,
  },
}

export const defaultDocsEntry = [
  {
    name: meta.name,
    data: {
      title: 'Headcode CMS Developer Documentation',
      description:
        'Developer documentation for installing, configuring, extending, and operating Headcode CMS with humans and AI tools.',
    },
  },
  {
    name: hero.name,
    data: {
      eyebrow: 'Docs',
      eyebrowIcon: 'book-open',
      title: 'Headcode CMS Developer Documentation',
      description:
        'A single-page guide for developers and AI tools working with Headcode CMS: installation, configuration, sections, fields, admin UI, frontend rendering, Markdown output, MCP, authentication, images, and publishing.',
      primaryButton: {
        title: 'Install',
        url: '#installation',
        openInNewWindow: false,
      },
      secondaryButton: {
        title: 'View source',
        url: 'https://github.com/headcodecms/headcodecms',
        openInNewWindow: true,
      },
    },
  },
  {
    name: snippet.name,
    data: {
      beforeContent: `## Install commands

Use these snippets for fresh local projects. They are copyable command surfaces for humans and agents.`,
      tabs: [
        {
          value: 'pnpm',
          label: 'pnpm',
          command:
            'pnpm dlx shadcn@latest init --preset bbVJxYW --base base --template next --pointer\npnpm dlx shadcn@latest add headcodecms/headcodecms/headcode\npnpm install',
        },
        {
          value: 'convex',
          label: 'Convex',
          command:
            'pnpm convex dev\npnpm dlx @convex-dev/auth\npnpm convex env set SITE_URL "http://localhost:3000"',
        },
        {
          value: 'agent',
          label: 'Agent Prompt',
          command:
            'Read https://headcodecms.com/start.md then install Headcode CMS in this directory.',
        },
      ],
      afterContent: `Run Convex before auth setup so \`CONVEX_DEPLOYMENT\` and generated Convex files exist. Do not put server secrets into \`NEXT_PUBLIC_*\` variables.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Installation

The recommended path is agent-guided installation. The agent should read the installation contract, inspect the target repository, initialize the shadcn project if needed, install the Headcode registry item, run Convex setup, configure auth, and stop when secrets or project choices are required.

For a fresh app, Headcode CMS is installed through the shadcn registry. The registry item brings in the app routes, Convex backend, CMS configuration files, public section renderers, admin UI, MCP route, and supporting components.

Before you configure Convex Auth, decide:

- which Convex project or deployment to use,
- which admin emails are allowed,
- which site URL auth should trust locally and in production,
- whether MCP bearer tokens should be enabled,
- and whether development test login should be enabled.

Run Convex before Auth setup so the generated Convex files and deployment environment exist. Never put server secrets into \`NEXT_PUBLIC_*\` variables.`,
    },
  },
  {
    name: snippet.name,
    data: {
      beforeContent: `## Agent installation prompts

Use these prompts when asking Codex, Claude Code, ChatGPT, Claude, or another coding agent to install or modify Headcode CMS.`,
      tabs: [
        {
          value: 'codex',
          label: 'Codex',
          command:
            'Read the Headcode CMS docs and source in this repository. Install or update Headcode CMS using the existing stack. Keep content modeling in headcode/config.ts and headcode/sections.ts, use Convex services for backend access, and verify with focused tests and lint.',
        },
        {
          value: 'claude-code',
          label: 'Claude Code',
          command:
            'You are working on a Headcode CMS project. Before editing, read AGENTS.md, ARCHITECTURE.md, headcode/config.ts, headcode/sections.ts, convex/services.ts, and the relevant app route. Make the smallest change, keep section data validated, and do not publish draft content unless I explicitly ask.',
        },
        {
          value: 'chatgpt',
          label: 'ChatGPT',
          command:
            'Help me plan a Headcode CMS content model. I need collections, globals, section types, fields, admin editing behavior, public rendering, Markdown output, and MCP editing prompts. Ask only for choices that affect the schema or publishing workflow.',
        },
      ],
      afterContent: `Good prompts mention the exact surface being changed: content model, default content, frontend renderer, admin field, Convex service, MCP tool, auth, or deployment settings.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Project map

The main files are deliberately few and explicit.

- \`headcode/config.ts\` defines collections and globals.
- \`headcode/sections.ts\` defines available section types.
- \`headcode/fields.ts\` defines reusable field factories and validators.
- \`headcode/defaults.ts\` defines starter content.
- \`headcode/types.ts\` contains inferred content types.
- \`app/(site)/\` renders the public website, Markdown views, sitemap, and \`/llms.txt\`.
- \`app/(site)/_sections/\` contains public section renderers. Keep HTML and Markdown rendering together here.
- \`app/(admin)/\` contains the authenticated editor UI.
- \`app/(admin)/_fields/\` maps field definitions to admin field controls.
- \`app/(mcp)/[transport]/route.ts\` exposes MCP tools for authorized AI clients.
- \`convex/services.ts\` is the shared service boundary used by site, admin, and MCP.
- \`convex/schema_validators.ts\` contains shared Convex validators.
- \`convex/section_validations.ts\` validates section JSON against configured field Zod validators.
- \`convex/authorization.ts\` contains the default project authorization hooks.

When using an AI tool, point it to these files before asking it to change behavior. Most Headcode work is a small change across config, a section definition, a public renderer, and sometimes an admin field component.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Source links

The source code lives in [headcodecms/headcodecms](https://github.com/headcodecms/headcodecms). These links are the best starting points when you want to inspect how Headcode works.

- [Repository root](https://github.com/headcodecms/headcodecms)
- [Installation contract](https://github.com/headcodecms/headcodecms/blob/main/public/start.md)
- [Architecture notes](https://github.com/headcodecms/headcodecms/blob/main/ARCHITECTURE.md)
- [CMS configuration folder](https://github.com/headcodecms/headcodecms/tree/main/headcode)
- [CMS config](https://github.com/headcodecms/headcodecms/blob/main/headcode/config.ts)
- [Section definitions](https://github.com/headcodecms/headcodecms/blob/main/headcode/sections.ts)
- [Field definitions](https://github.com/headcodecms/headcodecms/blob/main/headcode/fields.ts)
- [Default content](https://github.com/headcodecms/headcodecms/blob/main/headcode/defaults.ts)
- [Public site routes](https://github.com/headcodecms/headcodecms/tree/main/app/%28site%29)
- [Public section renderers](https://github.com/headcodecms/headcodecms/tree/main/app/%28site%29/_sections)
- [Admin app](https://github.com/headcodecms/headcodecms/tree/main/app/%28admin%29)
- [Admin field components](https://github.com/headcodecms/headcodecms/tree/main/app/%28admin%29/_fields)
- [MCP route](https://github.com/headcodecms/headcodecms/blob/main/app/%28mcp%29/%5Btransport%5D/route.ts)
- [Convex backend](https://github.com/headcodecms/headcodecms/tree/main/convex)
- [Convex services](https://github.com/headcodecms/headcodecms/blob/main/convex/services.ts)
- [Section data validation](https://github.com/headcodecms/headcodecms/blob/main/convex/section_validations.ts)
- [Authorization hooks](https://github.com/headcodecms/headcodecms/blob/main/convex/authorization.ts)
- [Registry definition](https://github.com/headcodecms/headcodecms/blob/main/registry.json)

For most tasks, start with the folder link, then open the deep link only when you need the exact implementation.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Configuration

\`headcode/config.ts\` is the content model entry point. It describes which collections and globals exist and which sections each one may use.

A collection is repeatable. Use collections for docs pages, legal pages, blog posts, case studies, products, locations, or anything with many entries.

A global is a singleton. Use globals for home, header, footer, pricing, navigation, settings, or \`llms.txt\`.

The config is shared by the public site, admin UI, Convex validation, defaults, and MCP tool descriptions. Keep it boring and explicit. If a section is not listed for a collection or global, editors and agents should not add it there.`,
    },
  },
  {
    name: code.name,
    data: {
      beforeContent: `## Configuration example

This is the shape a small documentation site might use. The public site fetches entries from Convex services and renders the configured section list.`,
      files: [
        {
          value: 'config',
          filename: 'headcode/config.ts',
          language: 'typescript',
          code: `import { code, footer, header, hero, llmsTxt, meta, snippet, text } from './sections'

export const headcodeConfig = {
  collections: [
    {
      slug: 'docs',
      label: 'Docs',
      path: '/docs',
      sections: [meta, hero, text, snippet, code],
    },
    {
      slug: 'pages',
      label: 'Pages',
      path: '/pages',
      sections: [meta, hero, text],
    },
  ],
  globals: [
    {
      slug: 'home',
      label: 'Home',
      path: '/',
      sections: [meta, hero, text],
    },
    {
      slug: 'header',
      label: 'Header',
      sections: [header],
    },
    {
      slug: 'footer',
      label: 'Footer',
      sections: [footer],
    },
    {
      slug: 'llms',
      label: 'llms.txt',
      path: '/llms.txt',
      sections: [llmsTxt],
    },
  ],
} as const`,
        },
        {
          value: 'prompt',
          filename: 'prompt.txt',
          language: 'text',
          code: `Add a products collection to this Headcode CMS project.

Use existing section and field patterns.
Update headcode/config.ts, add only the missing section definitions, create default content when useful, and add public renderers if the new section needs custom HTML or Markdown.
Do not bypass convex/services.ts.`,
        },
      ],
      afterContent: `If you are adding a new content area, start in config, then add sections and renderers only when the existing ones are not enough.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Sections

A page is an ordered list of sections. Sections are the main building blocks of Headcode CMS content.

Examples of default sections include:

- \`meta\` for title and description,
- \`hero\` for the first page section,
- \`text\` for Markdown rich text,
- \`imageText\` for image and copy pairs,
- \`image\` for standalone media,
- \`snippet\` for copyable commands and prompts,
- \`code\` for syntax-highlighted examples,
- \`header\` and \`footer\` for layout globals,
- and \`llmsTxt\` for editable \`/llms.txt\` content.

Each section has a name, label, icon, and fields. Section data is stored in Convex as a JSON string, then parsed and validated before services return it. This makes it possible for the admin UI, public site, and MCP tools to share one content model.

When creating a new section, think in four layers:

- the editor fields in \`headcode/sections.ts\`,
- default starter data in \`headcode/defaults.ts\`,
- HTML rendering in \`app/(site)/_sections/\`,
- Markdown rendering in the same section renderer file.

Keep new sections narrow. A good section represents one reusable page block, not an entire page hidden inside one field.`,
    },
  },
  {
    name: code.name,
    data: {
      beforeContent: `## Section example

This example adds a small FAQ section. Notice that the field definition, public HTML, and Markdown output are all predictable for an AI tool to follow.`,
      files: [
        {
          value: 'section',
          filename: 'headcode/sections.ts',
          language: 'typescript',
          code: `import { z } from 'zod'
import { TextField } from './fields'

export const faq = {
  name: 'faq',
  label: 'FAQ',
  icon: 'circle-help',
  fields: [
    {
      name: 'items',
      label: 'Questions',
      type: 'array',
      schema: z.array(
        z.object({
          question: z.string().min(1),
          answer: z.string().min(1),
        }),
      ),
      fields: [
        TextField({
          name: 'question',
          label: 'Question',
        }),
        TextField({
          name: 'answer',
          label: 'Answer',
        }),
      ],
    },
  ],
} as const`,
        },
        {
          value: 'renderer',
          filename: 'app/(site)/_sections/faq.tsx',
          language: 'tsx',
          code: `import type { SectionData } from '@/headcode/types'

type FaqData = SectionData<'faq'>

export const FaqSection = ({ data }: { data: FaqData }) => (
  <section className="mx-auto w-full max-w-3xl px-6 py-16">
    {data.items.map((item) => (
      <article key={item.question} className="border-t py-6">
        <h2 className="text-xl font-semibold">{item.question}</h2>
        <p className="mt-3 text-muted-foreground">{item.answer}</p>
      </article>
    ))}
  </section>
)

export const renderFaqMarkdown = (data: FaqData) =>
  data.items
    .map((item) => '## ' + item.question + '\\n\\n' + item.answer)
    .join('\\n\\n')`,
        },
      ],
      afterContent: `After adding the renderer, register it in the site section map. If the section should be editable by agents, make sure its fields validate cleanly and have obvious labels.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Fields

Fields are the editable values inside sections. Headcode field helpers live in \`headcode/fields.ts\` and pair editor metadata with Zod validation.

Common field types include:

- text and textarea fields,
- rich text fields that store Markdown,
- link fields with title, URL, and new-window behavior,
- image fields that store image references,
- select fields,
- checkbox fields,
- date/time fields,
- and array fields for repeated structures.

Field validators matter because section data can come from the admin UI, defaults, or MCP tools. The same validation path should protect all of them.

Rich text stores Markdown. Images store references such as \`{ imageId }\`; the image metadata, dimensions, blur placeholder, and storage IDs live in the Convex images table and are hydrated by services when needed.`,
    },
  },
  {
    name: code.name,
    data: {
      beforeContent: `## Field examples

Use existing field helpers when possible. If a new field type is needed, also add its admin field component and keep the data shape easy for agents to produce.`,
      files: [
        {
          value: 'basic',
          filename: 'headcode/sections.ts',
          language: 'typescript',
          code: `import { LinkField, RichtextField, TextField } from './fields'

export const callout = {
  name: 'callout',
  label: 'Callout',
  icon: 'message-square',
  fields: [
    TextField({
      name: 'eyebrow',
      label: 'Eyebrow',
    }),
    RichtextField({
      name: 'content',
      label: 'Content',
    }),
    LinkField({
      name: 'action',
      label: 'Action',
    }),
  ],
} as const`,
        },
        {
          value: 'image',
          filename: 'image-field-data.json',
          language: 'json',
          code: `{
  "image": {
    "imageId": "jn7..."
  },
  "alt": "Screenshot of the Headcode admin UI",
  "caption": "Images are stored in Convex and referenced from section data."
}`,
        },
      ],
      afterContent: `Prefer explicit field names over clever abstractions. Good labels help humans in the admin UI and help AI tools generate valid section JSON.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Admin UI

The admin UI lives in \`app/(admin)/\`. It is a focused editor for entries, sections, images, drafts, and publishing.

Editors can:

- sign in with Convex Auth,
- browse globals and collections,
- add, update, duplicate, reorder, and delete sections,
- edit fields through typed controls,
- upload and manage images,
- work on draft content,
- publish draft changes to live,
- create a new draft from live content,
- and restore previous snapshots where supported.

The admin UI should call Convex services, not database helpers. The service boundary keeps validation, authorization, image hydration, version routing, and future MCP parity in one place.

For custom projects, the usual admin work is adding a field renderer in \`app/(admin)/_fields/\` when a new field type is introduced. Most section changes only need existing fields and do not need admin UI code.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Frontend website building

The public website lives in \`app/(site)/\` and uses the Next.js App Router. Server Components should fetch content through Convex service queries and keep fetching simple. Let Convex function caching and the Headcode version selector do the first layer of work before adding custom Next.js caching.

Public pages are assembled from ordered sections. The section renderer maps a section name to a React component and maps the same section data to Markdown output.

For a custom website:

- keep shared layout chrome in site components,
- keep section-specific HTML and Markdown in \`app/(site)/_sections/\`,
- keep page-specific Markdown dispatchers next to their matching route as \`md.ts\`,
- use the configured collection routes to fetch entries by slug at request time,
- and avoid \`generateStaticParams\` for CMS-created pages unless static rendering is an intentional optimization.

The public site should feel like a real website, not a CMS preview. Headcode gives you defaults, but project-specific design belongs in the site layer.`,
    },
  },
  {
    name: code.name,
    data: {
      beforeContent: `## Frontend section rendering

HTML and Markdown renderers should stay close together. Markdown should be rendered from validated section data, not scraped from rendered HTML.`,
      files: [
        {
          value: 'map',
          filename: 'app/(site)/_sections/index.tsx',
          language: 'tsx',
          code: `import { TextSection, renderTextMarkdown } from './text'
import { FaqSection, renderFaqMarkdown } from './faq'

const sectionComponents = {
  text: TextSection,
  faq: FaqSection,
}

const sectionMarkdownRenderers = {
  text: renderTextMarkdown,
  faq: renderFaqMarkdown,
}`,
        },
        {
          value: 'page',
          filename: 'app/(site)/docs/page.tsx',
          language: 'tsx',
          code: `import { fetchHeadcodeEntry } from '../_lib/content'
import { RenderSections } from '../_sections'

export default async function DocsPage() {
  const entry = await fetchHeadcodeEntry({
    collection: 'docs',
    slug: 'docs',
  })

  return <RenderSections sections={entry.sections} />
}`,
        },
      ],
      afterContent: `If an AI tool adds a section, ask it to update both the visual renderer and the Markdown renderer. This is one of the most important Headcode conventions.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Markdown output and llms.txt

Headcode assumes every important public page should be understandable as Markdown.

The designed HTML page is for humans. The Markdown page is for AI tools, search-adjacent workflows, documentation ingestion, and quick source-of-truth reading.

The Markdown route should use the same dispatcher as \`?md\` and \`Accept: text/markdown\`. It should call page-local \`md.ts\` renderers, and those renderers should call section Markdown functions.

\`/llms.txt\` is a CMS-backed global. It should explain what the site is, link to important Markdown pages, and describe how agents should use the site. Keep it concise, accurate, and updated when important routes or docs change.

Do not generate Markdown by scraping HTML. Use validated section data directly so the output stays stable, compact, and predictable.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Convex services and validation

Convex is the backend for Headcode CMS. The public site, admin UI, and MCP route all go through \`convex/services.ts\`.

This boundary is important. Services handle:

- reading globals and collection entries,
- ensuring default globals exist,
- creating and renaming entries,
- adding, updating, duplicating, deleting, and reordering sections,
- image registration and metadata updates,
- draft/live publishing operations,
- version-aware content fetching,
- authorization checks,
- and parsed, validated section data.

Shared validators live in \`convex/schema_validators.ts\`. Section JSON validation lives in \`convex/section_validations.ts\`. Do not duplicate schema shapes across services, database helpers, and MCP tools.

Section data is stored as JSON strings in Convex. Services return parsed and validated data. This keeps storage flexible while still giving the frontend and agents a safe typed shape.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## MCP

Headcode includes an MCP server so authorized AI clients can inspect and edit CMS content without pretending to use the browser.

The MCP route lives at \`app/(mcp)/[transport]/route.ts\`. Access is controlled with bearer tokens. Configure matching \`ALLOWED_MCP_TOKENS\` in Convex and in the Next.js environment.

Typical MCP tools include:

- \`headcode_get_version\`,
- \`headcode_list_entries\`,
- \`headcode_get_entry\`,
- \`headcode_list_section_types\`,
- \`headcode_ensure_global\`,
- \`headcode_add_entry\`,
- \`headcode_rename_entry\`,
- \`headcode_delete_entry\`,
- \`headcode_update_section\`,
- \`headcode_add_section\`,
- \`headcode_duplicate_section\`,
- \`headcode_delete_section\`,
- \`headcode_reorder_sections\`,
- \`headcode_upload_image_from_url\`,
- \`headcode_create_image_upload_url\`,
- \`headcode_register_uploaded_image\`,
- \`headcode_list_images\`,
- \`headcode_get_image_usage\`,
- \`headcode_update_image_metadata\`,
- \`headcode_delete_image\`,
- \`headcode_new_draft\`,
- and \`headcode_publish\`.

Publishing is intentionally special. Agents should not call \`headcode_publish\` unless the user explicitly asks to publish, release, promote draft to live, or make draft content public.`,
    },
  },
  {
    name: snippet.name,
    data: {
      beforeContent: `## MCP prompts

Use prompts that separate inspection, editing, image upload, and publishing. This reduces accidental live changes.`,
      tabs: [
        {
          value: 'inspect',
          label: 'Inspect',
          command:
            'Use the Headcode MCP server. Call headcode_get_version, list entries, then read the docs entry. Summarize the current content model and do not make changes.',
        },
        {
          value: 'edit-draft',
          label: 'Edit draft',
          command:
            'Use the Headcode MCP server to update the draft docs page. Add one text section and one code section. Keep the existing section order unless the requested change requires moving sections. Do not publish.',
        },
        {
          value: 'image',
          label: 'Image',
          command:
            'Upload this image with headcode_upload_image_from_url, then update the target image section with the returned imageId. Add useful alt text and keep draft content unpublished.',
        },
        {
          value: 'publish',
          label: 'Publish',
          command:
            'Publish the current draft to live with headcode_publish. Before publishing, show me the entries and sections that will change and ask for confirmation.',
        },
      ],
      afterContent: `For local binary image uploads, create an upload URL, POST the file, then register the uploaded image. For remote images, prefer \`headcode_upload_image_from_url\` because it validates and creates metadata server-side.`,
    },
  },
  {
    name: code.name,
    data: {
      beforeContent: `## MCP client configuration

Exact client config differs between tools, but the important parts are the endpoint URL and bearer token.`,
      files: [
        {
          value: 'json',
          filename: 'mcp.json',
          language: 'json',
          code: `{
  "mcpServers": {
    "headcode-draft": {
      "url": "https://draft.example.com/mcp",
      "headers": {
        "Authorization": "Bearer hc_dev_token"
      }
    },
    "headcode-live": {
      "url": "https://example.com/mcp",
      "headers": {
        "Authorization": "Bearer hc_live_token"
      }
    }
  }
}`,
        },
        {
          value: 'env',
          filename: '.env.local',
          language: 'dotenv',
          code: `ALLOWED_MCP_TOKENS=hc_dev_token
NEXT_PUBLIC_HEADCODE_VERSION=auto
NEXT_PUBLIC_HEADCODE_DRAFT_HOSTS=draft.example.com,headcode.localhost`,
        },
      ],
      afterContent: `Live and draft MCP clients should usually point to different hosts. Version routing follows the request host; do not invent separate service arguments for live versus draft.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Authentication

Admin authentication uses Convex Auth with Resend magic links by default.

The core production variables are:

- \`JWT_PRIVATE_KEY\`,
- \`JWKS\`,
- \`SITE_URL\`,
- \`AUTH_RESEND_KEY\`,
- optional \`AUTH_RESEND_FROM\`,
- and \`ALLOWED_ADMIN_EMAILS\`.

\`ALLOWED_ADMIN_EMAILS\` is the default project-level allow list. If a user signs in with an email that is not allowed, access should fail with a friendly UI message rather than a raw server stack trace.

Development test login can be enabled, but keep it out of production. It requires matching public and server-side variables, including \`NEXT_PUBLIC_HEADCODE_ENABLE_TEST_LOGIN\`, \`NEXT_PUBLIC_HEADCODE_ADMIN_TEST_TOKEN\`, \`HEADCODE_ENABLE_TEST_LOGIN\`, \`HEADCODE_ADMIN_TEST_TOKEN\`, and \`HEADCODE_ADMIN_TEST_EMAIL\`. The test email still needs to be in \`ALLOWED_ADMIN_EMAILS\`.

Authorization extension points live in \`convex/authorization.ts\`. Extend this file for project-specific users, organizations, roles, metadata, or stricter publishing rules.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Draft, live, and publishing

Headcode has draft and live versions.

Editors and agents normally modify draft content. Publishing promotes draft content to live and creates a new draft from it. This gives teams a controlled path from editing to public release.

Version selection is configured with \`NEXT_PUBLIC_HEADCODE_VERSION\`:

- \`live\` always reads live content,
- \`draft\` always reads draft content,
- \`auto\` uses \`NEXT_PUBLIC_HEADCODE_DRAFT_HOSTS\` to choose draft hosts and otherwise defaults to live.

Use \`auto\` for production-like setups where preview or staging hosts should read draft content while the main public host reads live content.

For AI tools, the rule is simple: inspect and edit drafts freely when authorized, but publish only after an explicit user request.`,
    },
  },
  {
    name: code.name,
    data: {
      beforeContent: `## Environment example

Keep browser-safe values public and secrets server-side. Convex environment variables are set with \`pnpm convex env set\`, not by adding them to a client bundle.`,
      files: [
        {
          value: 'next',
          filename: '.env.local',
          language: 'dotenv',
          code: `NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_HEADCODE_VERSION=auto
NEXT_PUBLIC_HEADCODE_DRAFT_HOSTS=headcode.localhost
ALLOWED_MCP_TOKENS=hc_dev_token`,
        },
        {
          value: 'convex',
          filename: 'Convex environment',
          language: 'bash',
          code: `pnpm convex env set SITE_URL "http://localhost:3000"
pnpm convex env set ALLOWED_ADMIN_EMAILS "you@example.com"
pnpm convex env set AUTH_RESEND_KEY "re_..."
pnpm convex env set AUTH_RESEND_FROM "Headcode CMS <login@example.com>"
pnpm convex env set ALLOWED_MCP_TOKENS "hc_dev_token"`,
        },
      ],
      afterContent: `Use different tokens for local, draft, and production contexts. Rotate tokens if they are shared with the wrong client or appear in logs.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Images

Images are stored in Convex Storage and referenced from section data with an \`imageId\`.

The image table stores metadata such as filename, content type, dimensions, storage ID, alt text, and blur placeholder data. Services hydrate image fields so public renderers can use the image safely.

For admin users, the image manager handles upload and metadata editing. For MCP clients, prefer \`headcode_upload_image_from_url\` when the source is a URL. It validates the image, generates metadata and blur data server-side, stores the asset in Convex, and returns \`{ imageId }\`.

If an MCP client must upload a local binary, the flow is:

1. call \`headcode_create_image_upload_url\`,
2. upload the file with HTTP \`POST\` to the returned URL,
3. call \`headcode_register_uploaded_image\` with the returned \`storageId\`,
4. update the target section with the new \`imageId\`.

Always include useful alt text. It improves accessibility, search context, and agent-readable page summaries.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## Manual developer workflow

For most Headcode development tasks, use this loop:

1. Read \`AGENTS.md\` and \`ARCHITECTURE.md\` if the change touches more than one app area.
2. Inspect \`headcode/config.ts\` to understand allowed collections, globals, and section types.
3. Inspect \`headcode/sections.ts\` and \`headcode/fields.ts\` before adding data shapes.
4. Add or update default content in \`headcode/defaults.ts\` when the starter site should change.
5. Add public HTML and Markdown renderers in \`app/(site)/_sections/\`.
6. Add admin field components only when introducing a new field type.
7. Keep backend access behind \`convex/services.ts\`.
8. Run focused tests, lint, and registry validation when relevant.
9. Read the Markdown output as a final agent-facing verification pass.

Good success criteria are concrete: the content validates, the public page renders, the Markdown output is readable, the admin UI can edit the data, MCP tools can describe or update it, and publishing remains explicit.`,
    },
  },
  {
    name: snippet.name,
    data: {
      beforeContent: `## Developer task prompts

These prompts are useful when working with a coding agent on an existing Headcode project.`,
      tabs: [
        {
          value: 'add-section',
          label: 'Add section',
          command:
            'Add a testimonials section to this Headcode CMS project. Use existing field helpers, add the section to the correct collections in headcode/config.ts, create default content if useful, render HTML and Markdown in app/(site)/_sections, and verify section validation.',
        },
        {
          value: 'custom-site',
          label: 'Customize site',
          command:
            'Customize the public Headcode site for this brand. Keep the content model intact, use existing section data, improve the site renderers and CSS only where needed, and keep Markdown output stable for AI tools.',
        },
        {
          value: 'mcp-edit',
          label: 'MCP edit',
          command:
            'Use the Headcode MCP server to update the draft homepage copy. First inspect the current entry and section types. Then update only the requested sections. Do not publish.',
        },
        {
          value: 'debug-auth',
          label: 'Debug auth',
          command:
            'Debug Headcode admin authentication. Check Convex Auth configuration, SITE_URL, Resend variables, ALLOWED_ADMIN_EMAILS, proxy protection, and friendly handling for disallowed email addresses. Do not expose secrets in the response.',
        },
      ],
      afterContent: `Agents work best when the prompt states the boundary, the files to inspect, the desired output, and whether publishing is allowed.`,
    },
  },
  {
    name: text.name,
    data: {
      content: `## What a new developer should understand

Headcode CMS is small on purpose. The architecture is meant to be read, changed, and explained by developers and agents.

The most important mental model is:

- config says what content may exist,
- sections say what data each content block stores,
- fields say how that data is edited and validated,
- defaults provide starter content,
- Convex services protect the backend boundary,
- site renderers turn validated data into HTML and Markdown,
- admin UI gives humans a focused editor,
- MCP gives authorized agents a direct editing interface,
- and draft/live publishing controls when changes become public.

If you keep those boundaries intact, Headcode is straightforward to customize. Add the content shape, render it for humans, render it for agents, validate it at the service boundary, and publish only when the user intends to go live.`,
    },
  },
]
