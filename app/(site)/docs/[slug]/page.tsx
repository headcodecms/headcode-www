import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderSections } from '../../_sections'
import { getHeadcodeCollectionEntry, getMeta } from '../../_lib/headcode'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const page = await getHeadcodeCollectionEntry('docs', slug)
  if (!page) return {}

  const meta = getMeta(page)
  return {
    title: meta ? `${meta.title} - Headcode CMS Docs` : 'Headcode CMS Docs',
    description: meta?.description,
  }
}

export default async function DocsCollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await getHeadcodeCollectionEntry('docs', slug)
  if (!page) notFound()

  return <RenderSections entry={page.entry} sections={page.sections} />
}
