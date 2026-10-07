<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Get in touch"
      title-ta="தொடர்பு கொள்ள"
      lead="Call us directly to book a date, or send an enquiry using the form below. We are here to help at any time, 24×7."
    />

    <PageContent>
      <div class="grid gap-6 md:grid-cols-3">
        <div class="card p-6">
          <span class="grid h-12 w-12 place-items-center rounded-full bg-saffron-100 text-saffron-600">
            <AppIcon name="phone" class="h-6 w-6" />
          </span>
          <h2 class="mt-4 text-xl">Phone</h2>
          <p class="mt-2 leading-8">
            <a :href="site.phoneHref" class="text-lg font-semibold text-kumkum-700 hover:underline">{{ site.phone }}</a><br>
            <a :href="site.landlineHref" class="text-kumkum-700 hover:underline">{{ site.landline }}</a>
          </p>
          <p class="mt-2 text-sm text-ink-muted">{{ site.languages }}</p>
        </div>

        <div v-for="place in site.places" :key="place.label" class="card p-6">
          <span class="grid h-12 w-12 place-items-center rounded-full bg-saffron-100 text-saffron-600">
            <AppIcon name="pin" class="h-6 w-6" />
          </span>
          <h2 class="mt-4 text-xl">{{ place.label }}</h2>
          <address class="mt-2 not-italic leading-7 text-ink-muted">
            <span v-for="line in place.lines" :key="line" class="block">{{ line }}</span>
          </address>
        </div>
      </div>

      <section class="mt-16" aria-labelledby="enquiry-heading">
        <div class="text-center">
          <h2 id="enquiry-heading" class="text-3xl">Send an enquiry</h2>
          <OrnamentDivider class="mt-4" />
          <p class="mt-4 text-ink-muted">The form may take a few seconds to load; please bear with us 🙏</p>
        </div>
        <div class="card mt-8 overflow-hidden p-2 sm:p-4">
          <iframe
            class="airtable-embed airtable-dynamic-height block w-full rounded-xl"
            src="https://airtable.com/embed/shrdhp7545kYQEnLe?backgroundColor=orange"
            title="Enquiry form"
            frameborder="0"
            height="943"
            loading="lazy"
            style="background: transparent"
          />
        </div>
      </section>
    </PageContent>
  </div>
</template>

<script setup>
usePageSeo({
  title: 'Contact Sambath Shastri | Book Thila Homam at Thirupullani',
  description: `Call ${site.phone} to book Thila Homam at Thirupullani or Sethukarai. Addresses in Thirupullani and Ramanathapuram, with guidance in ${site.languages}.`
})

useHead({
  script: [{ src: 'https://static.airtable.com/js/embed/embed_snippet_v1.js' }]
})
</script>
