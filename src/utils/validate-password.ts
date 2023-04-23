export type Country = { password: string, flag?:string; slug: string, country: string, html?: string; images?: string[]  }

export const Britain: Country = {
  password: 'God save the king',
  slug: 'united-kingdom-of-great-britain-and-northern-ireland',
  country: 'United Kingdom of Great Britain and Northern Ireland',
  flag: 'https://djaccw3ms0b81.cloudfront.net/zbytecnosti/britainflag.png',
  images: ['https://djaccw3ms0b81.cloudfront.net/zbytecnosti/britan.jpg'],
  html: `
  <p style="margin: 1em 0">
    Vážený diplomate,
</p>
<p style="margin: 1em 0">
    rád bych vám sdělil důvody, proč by se měla Anglie angažovat v
    nadcházejícím konfliktu.
</p>
<p style="margin: 1em 0">
    Za prvé, naši spojenci a přátelé, Francie a Belgie, jsou ohroženi německým
    expanzionismem a agresivní politikou. Jakožto země s dlouhou tradicí a
    závazky k mezinárodnímu právu, máme morální povinnost stát po boku našich
    přátel a bránit společné hodnoty a principy.
</p>
<p style="margin: 1em 0">
    Za druhé, německá expanze a vojenská moc jsou velkým ohrožením pro
    stabilitu Evropy a celého světa. Pokud bychom nezasáhli, hrozilo by, že se
    Německo stane ještě silnějším a bude diktovat podmínky celému kontinentu.
    Spojené království musí být připraveno bránit se a chránit své zájmy.
</p>
<p style="margin: 1em 0">
    Za třetí, německá vojenská expanze je vážným ohrožením pro britské
    impérium. Německo se snaží získat světovou moc a ekonomickou dominanci, což
    by mohlo vést k ohrožení naší pozice jako přední světové velmoci. V této
    době musíme být připraveni chránit naše impérium a naše obchodní zájmy.
</p>
<p style="margin: 1em 0">
    Za čtvrté, anglický národ má dlouhou tradici odvahy a statečnosti v obraně
    svých hodnot a svobody. Nechceme zklamat naše předky a musíme být
    připraveni riskovat pro ochranu našich hodnot a ideálů.
</p>
<p style="margin: 1em 0">
    Francii však nemůžeme důvěřovat donekonečna. Jak nás historie naučila, ne
    vždy to byli naši spojenci. Jen si představte, co by se stalo, kdyby nás
    Francie najednou zradila a vrazila nám dýku do zad.
</p>
<p style="margin: 1em 0">
    Věřím, že naše země se musí postavit na stranu spravedlnosti a zasadit se o
    mír a stabilitu v Evropě. Doufám, že se k nám přidáte a společně dokážeme z
    tohoto konfliktu vytěžit to nejlepší pro naše impérium a upevnit mír a
    prosperitu v Evropě.
</p>
<p style="margin: 1em 0">
    S pozdravem,
</p>
<p style="margin: 1em 0">
    Herbert Henry Asquith
</p>`
}

export const Germany: Country = {
  password: 'Es lebe der Kaiser',
  slug: 'deutsches-kaiserreich',
  country: 'Germany',
}

export const Austria: Country = {
  password: 'Es lebe der Konig und Kaiser',
  slug: 'osterreich-ungarn',
  country: 'Austria-Hungary',
}

export const Russia: Country = {
  password: 'Da zdravstvuyet tsar',
  slug: 'rossiyskaya-imperiya',
  country: 'Russia',
}

export const Italy: Country = {
  password: 'Viva il Re',
  slug: 'regno-ditalia',
  country: 'Italy',
}

export const Turkey: Country = {
  password: 'Yasasin Sultanimiz',
  slug: 'osmanli-imparatorlugu',
  country: 'Turkey',
}

export const France: Country = {
  password: 'Vive la Republique',
  slug: 'troisieme-republique-francaise',
  country: 'France',
}



const countryData: Country[] = [
  Britain,
  Germany,
  Austria,
  Russia,
  Italy,
  Turkey,
  France,
]

// Německo: "Es lebe der Kaiser' (Ať žije císař!)
// Rakousko-Uhersko: "Es lebe der Konig und Kaiser!" (Ať žije král a císař!)
// Rusko: "Da zdravstvuyet tsar!" (Ať žije car!)
// Itálie: "Viva il Re!" (Ať žije král!)
// Turecko: "Yasasin Sultanimiz!" (Ať žije náš sultán!)
// Anglie: "God save the King!" (Bůh ochraňuj krále/královnu!)
// Francie: "Vive la République!" (Ať žije republika!)


export const normalizePassword = (attempted: string) => attempted.toLowerCase().trim().replaceAll(' ', '')

export const getCountryBySlug = (attemptedSlug: string) => countryData.find(({ slug }) => normalizePassword(slug) === normalizePassword(attemptedSlug))

export const validatePassword = (attempted: string): Country | undefined  => {
  const noramlizedAttempt = normalizePassword(attempted)

  return countryData.find((country) => normalizePassword(country.password) === noramlizedAttempt)
}
