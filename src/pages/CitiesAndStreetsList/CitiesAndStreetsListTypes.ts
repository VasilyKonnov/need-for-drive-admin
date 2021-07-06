export type TCitiesAndStreetsList = {
  isOpenCity: boolean
  isOpenStreet: boolean
  isEditStreet: boolean
  isEditCity: boolean
  handleOpenModalCity: () => void
  handleCloseModalCity: () => void
  handleOpenModalStreet: () => void
  handleCloseModalStreet: () => void
  handleEditStreet: () => void
  handleEditCity: () => void
}
