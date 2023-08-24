import {DefaultDocumentNodeResolver} from 'sanity/desk'
import {Iframe} from 'sanity-plugin-iframe-pane'
import {SanityDocument} from 'sanity'

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  return doc?.slug
    ? `${window.location.host}/${doc.slug}`
    : `${window.location.host}`
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `movie`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}