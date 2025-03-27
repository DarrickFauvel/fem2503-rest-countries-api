import { getFeatures, getWelcomeMessage } from "src/models/homeModel"

import { HomeView } from "src/views/pages/home-view"

export const renderHomeView = () => {
  const welcomeMessage = getWelcomeMessage()
  const features = getFeatures()

  return HomeView({ welcomeMessage, features })
}
