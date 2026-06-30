import {
  getHeadcodeCollectionEntries,
  getHeadcodeCollectionEntry,
} from '../_lib/headcode'
import { renderSectionsMarkdown } from '../_sections'

export const renderDocsMarkdown = async (slug?: string) => {
  const docs = slug
    ? await getHeadcodeCollectionEntry('docs', slug)
    : (await getHeadcodeCollectionEntries('docs'))[0]
  if (!docs) return null

  return renderSectionsMarkdown({
    entry: docs.entry,
    sections: docs.sections,
  })
}
