<template>
  <PageContent>
    <div
      class="
        item
        row
        mx-auto
        bg-orange-200
        rounded-xl
        shadow-md
        overflow-hidden
        about-us
        card
      "
    >
      <div class="md:flex mt-4">
        <div class="md:shrink-0">
          <img
            class="h-auto w-80 object-scaledown rounded img-fluid dp-img"
            src="~/assets/images/sambath-shastri1.png"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="px-8 name-address">
          <div class="tracking-wide text-amber-900 name">
            <h3>H. SAMBATH SASTRI (Adhyana Pattar)</h3>
            <h4>ஸ்ரீ சம்பத் சாஸ்திரி</h4>
            <h5><span class=""
          >&#9742;</span>+91 - 94435 03868</h5>
            <p class="mt-2 text-lg text-muted">
              Arulmigu Sri Vazhividu Murugan Temple,<br />
              No.46, South car street, Ramanathapuram - 623501
            </p>
          </div>
          <div
            class="
              justify-center
              tracking-normal
              text-justify
              leading-tight
              relative
              w-auto
              text-yellow-900
              card-text
            "
          >
            <ul class="relative about-list text-xl">
              <li>Adhyana Battar @ Vazhividu Murugan Temple.</li>
              <li>
                He has been performing THILA HOMAM for past 2 decades in
                Ramanthapuram, Tirupullani, Sethukarai & Rameshwaram to get
                nivarthi from Pithru Dosha.
              </li>
              <li>
                He is dedicatedly performs shanthi pariharam for sahala dhosa
                nivarthis at ADHI SETU (Sethukarai) where lord Rama started the
                construction of bridge to reach Lanka.
              </li>
              <li>
                He is the disciple of T.P.L.S. Lakshmana Shastri, Tirupullani.
              </li>
              <li>
                He also conducts auspicious functions like Ganapathi Homam,
                ThirumanaVaibhavam (Wedding), Punyahavachanam, Gruhapravesam,
                Kumbabhishekam etc.
              </li>
              <li>He is fluent in Tamil, English & Telegu.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </PageContent>
</template>

<style>

.name{
  border-bottom: solid;
}
.about-us {
  background-color: #f4e1d5;
}

.about-list li {
  padding-top: 5px;
  padding-bottom: 5px;
}

@media all and (min-width: 275px) and (max-width: 399px) {
.dp-img {
    height: 13rem !important;
    object-fit: cover;
    width: 100%;
    object-position: top;
}

.name-address {
  padding-left:0;
  padding-right:0;
  margin-top:4px;
}

}
/* @media all and (max-width: 768px){
  p {
    background-color: yellow;
    color: blue;
  }
div.pagecontent {
    width: 100%;
    margin-left:0;
    overflow: hidden;
    margin-right:50px;
  }

} */
</style>
