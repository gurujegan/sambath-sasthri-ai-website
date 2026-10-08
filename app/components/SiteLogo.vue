<template>
  <NuxtLink to="/" class="group flex items-center gap-3" aria-label="Sambath Sasthri – home">
    <!-- Homa-kundam flame, echoing the original logo -->
    <svg viewBox="0 0 48 48" class="h-11 w-11 shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="logo-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stop-color="#B4560F" />
          <stop offset=".55" stop-color="#EE9440" />
          <stop offset="1" stop-color="#F1DDA4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logo-flame)"
        d="M24 4c1.6 5.6 8.6 9 8.6 17.2a8.6 8.6 0 0 1-17.2 0c0-4.3 2.4-6.5 4.2-8.6.5 2.8 1.6 4.3 3.4 5.2 0-5.2 1-9.4 1-13.8z"
      />
      <path fill="#DDB24A" d="M8 35h32v3H8zM12 40h24v3H12z" />
    </svg>
    <span class="leading-tight">
      <span class="block font-display text-xl text-sandal-50 sm:text-2xl">Sambath Sastri</span>
      <span lang="ta" class="block text-xs text-gold-300 sm:text-sm">ஸ்ரீ சம்பத் சாஸ்திரி</span>
    </span>
  </NuxtLink>
</template>
