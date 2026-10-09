import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    services: defineCollection({
      type: 'page',
      source: 'services/*.md',
      schema: z.object({
        order: z.string().optional(),
        cardImageUrl: z.string().optional(),
        cardImageAlt: z.string().optional(),
        datePublished: z.string().optional(),
        // Rendered at the end of the article and emitted as FAQPage structured data
        faq: z.array(z.object({
          question: z.string(),
          answer: z.string()
        })).optional()
      })
    })
  }
})
