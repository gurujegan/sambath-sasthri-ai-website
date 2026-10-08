<template>
  <div>
    <PageHero
      eyebrow="Gallery"
      title="Moments of devotion"
      title-ta="புகைப்படங்கள்"
      lead="Rituals, preparations and the temple town of Thirupullani."
    />

    <PageContent>
      <ul class="columns-1 gap-6 sm:columns-2 lg:columns-3">
        <li v-for="photo in photos" :key="photo.src" class="mb-6 break-inside-avoid">
          <figure class="card overflow-hidden">
            <img :src="photo.src" :alt="photo.caption" class="w-full" loading="lazy">
            <figcaption class="px-4 py-3 text-sm text-ink-muted">{{ photo.caption }}</figcaption>
          </figure>
        </li>
      </ul>
    </PageContent>

    <CallCta />
  </div>
</template>

<script setup>
usePageSeo({
  title: 'Gallery | Thila Homam at Thirupullani & Sethukarai – Sambath Sasthri',
  description: 'Photos of Thila Homam, Shanthi Pariharam and Sarpa Shanthi rituals at Thirupullani and Sethukarai, and the temple town where devotees stay.'
})

const photos = [
  { src: '/images/thila-homam.webp', caption: 'Thila Homam at Ghosala, Thirupullani' },
  { src: '/images/Kumbham.webp', caption: 'Kalasams prepared on banana leaf' },
  { src: '/images/temple-tower.webp', caption: 'Adhi Jagannatha Perumal Temple, Thirupullani' },
  { src: '/images/Mattukottakai.webp', caption: 'A homam performed with a family' },
  { src: '/images/thilahomam-in-sethukarai.webp', caption: 'Thila Homam in Sethukarai' },
  { src: '/images/Thanam 1.webp', caption: 'Dhanam offerings' },
  { src: '/images/sarpa-shanthi.webp', caption: 'Sarpa Shanthi' },
  { src: '/images/Thirupulani anjaneyar temple.webp', caption: 'Anjaneyar temple, Thirupullani' },
  { src: '/images/shanthi-pariharam-sethikarai.webp', caption: 'Shanthi Pariharam at Sethukarai' },
  { src: '/images/Prathimai.webp', caption: 'Offerings prepared for the ritual' },
  { src: '/images/tgudi-mutt.webp', caption: 'Thirukkurungudi Jeeyar Mutt, where devotees stay' },
  { src: '/images/thirupullani-premise.webp', caption: 'Our Thila Homam premises at Thirupullani' }
]
</script>
