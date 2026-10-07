<template>
  <PageContent class="homepage">
    <div class="item"><ImageSlider /></div>
    <section
      class="
        item
        flex-row
        justify-content-around
        d-flex
        row
        align-content-between
      "
    >
    <h1><p class="underline">Services</p></h1>
    <h3 class="text-justify leading-relaxed">
      <ul><li>All  <nuxt-link to="/thila-homam/" class="hover:underline">Thilahomam</nuxt-link> related services will be done here</li>
      <!-- <li>Shanthi parihara for sahala dhosha nivarthi puja will be performed at AADHISETHU (Sethukarai)
      <li>Fulfilling their needs with right rituals</li>
      <li>Well experienced pundits and high quality service</li> -->
      <li>Best accomodation & food service</li>
      <li>Proven Results & Thousands Benifited</li></ul></h3> <br><br>
      <div class="mycol col-xs-6 col-md-4">
        <CardAsLink :articleName="`thila-homam`" :iconName="`homam-image2`">
          <h3 class="card-title">Thila Homam</h3>
          <h5 class="text-muted">தில ஹோமம்</h5>
          <p class="card-text leading-6">
            <!-- Some quick example text to build on the card title and make up the
            bulk of the card's content. -->
          </p>
        </CardAsLink>
      </div>
      <div class="mycol col-xs-6 col-md-4">
        <CardAsLink :articleName="`travel-and-accommodation`" :iconName="`journey-icon`">
          <h3 class="card-title">Travel & Accommodation</h3>
          <h5 class="text-muted">பயணித்தல் மற்றும் இடவசதி</h5>
          <p class="card-text leading-6">
            <!-- Some quick example text to build on the card title and make up the
            bulk of the card's content. -->
          </p>
        </CardAsLink>
      </div>
      <div class="mycol col-xs-6 col-md-4">
        <CardAsLink :articleName="`travel-and-accommodation`" :iconName="`social-media-icon`">
          <h3 class="card-title">Follow us on</h3>
          <h5 class="text-muted">Youtube, Faceboock & Instagram</h5>
          <p class="card-text leading-6">
            <!-- Some quick example text to build on the card title and make up the
            bulk of the card's content. -->
          </p>
        </CardAsLink>
      </div>
      </section>
    <!-- <div class="h-56 grid grid-cols-3 gap-8 content-start mb-16">
          <Card>
            <section>
              <h2 class="font-semibold text-3xl underline">ThilaHomam</h2>
              <p class="break-normal text-justify tracking-wider mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </section>
          </Card>
          <Card>
            <section>
              <h2 class="font-semibold text-3xl underline">ThilaHomam</h2>
              <p class="break-normal text-justify tracking-wider mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </section>
          </Card>
                    <Card>
            <section>
              <h2 class="font-semibold text-3xl underline">ThilaHomam</h2>
              <p class="break-normal text-justify tracking-wider mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </section>
          </Card>
        </div> -->
  </PageContent>
</template>

<style>
.homepage .mycol {
  margin-bottom: 1.5rem;
}
</style>
