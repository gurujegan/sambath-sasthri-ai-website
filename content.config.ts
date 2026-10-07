import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    services: defineCollection({
      type: 'page',
      source: 'services/*.md',
      schema: z.object({
        order: z.string().optional(),
        cardImageUrl: z.string().optional()
      })
    })
  }
})
