import type { MaybeRefOrGetter } from 'vue'

interface PageSeo {
  title: MaybeRefOrGetter<string | undefined>
  description: MaybeRefOrGetter<string | undefined>
  image?: MaybeRefOrGetter<string | undefined>
}

// Title, description and the matching social-share (Open Graph / Twitter) tags for one page.
// Canonical URL, og:url and site-wide defaults are set once in app.vue.
export function usePageSeo({ title, description, image }: PageSeo) {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    ...(image && {
      ogImage: () => absoluteUrl(toValue(image)),
      twitterImage: () => absoluteUrl(toValue(image))
    })
  })
}

export function absoluteUrl(path?: string) {
  if (!path) return undefined
  return /^https?:\/\//.test(path) ? path : `${site.url}${encodeURI(path)}`
}
