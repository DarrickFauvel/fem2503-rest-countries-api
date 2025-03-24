import { getFeatures, getWelcomeMessage } from "src/models/homeModel"

import { HomeView } from "src/views/HomeView"

export const renderHomeView = () => {
  const welcomeMessage = getWelcomeMessage()
  const features = getFeatures()

  return HomeView({ welcomeMessage, features })
}
