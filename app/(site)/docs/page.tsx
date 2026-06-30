import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderSections } from '../_sections'
import { getHeadcodeCollectionEntries, getMeta } from '../_lib/headcode'

export const generateMetadata = async (): Promise<Metadata> => {
  const docsPages = await getHeadcodeCollectionEntries('docs')
  const docs = docsPages[0]
  const meta = docs ? getMeta(docs) : null

  return {
    title: meta ? `${meta.title} - Headcode CMS Docs` : 'Docs - Headcode CMS',
    description: meta?.description,
  }
}

export default async function DocsPage() {
  const docsPages = await getHeadcodeCollectionEntries('docs')
  const docs = docsPages[0]
  if (!docs) notFound()

  return <RenderSections entry={docs.entry} sections={docs.sections} />
}
