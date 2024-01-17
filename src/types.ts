export interface Artwork {
  id: number
  title: string
  dateDisplay: string
  artistDisplay: string
}

export interface ArtworkDetail extends Artwork {
  placeOfOrigin: string
  dimensions: string
  creditLine: string
  mediumDisplay: string
  artworkTypeTitle: string
  departmentTitle: string
  imageUrl: string
}
