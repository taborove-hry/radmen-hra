export type Country = { password: string, slug: string, country: string  }

export const Britain: Country = {
  password: 'God save the king',
  slug: 'united-kingdom-of-great-britain-and-northern-ireland',
  country: 'United Kingdom of Great Britain and Northern Ireland',
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
