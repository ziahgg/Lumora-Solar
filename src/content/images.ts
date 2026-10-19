// Photos exported from the image fills of the Figma homepage (same fills on desktop and mobile).
import hero from '../assets/images/hero.webp'
import serviceResidential from '../assets/images/service-residential.webp'
import serviceCommercial from '../assets/images/service-commercial.webp'
import serviceBattery from '../assets/images/service-battery.webp'
import serviceUpgrades from '../assets/images/service-upgrades.webp'
import serviceMaintenance from '../assets/images/service-maintenance.webp'
import serviceConsultation from '../assets/images/service-consultation.webp'
import installationTeam from '../assets/images/why-installation-team.webp'
import projectResidential from '../assets/images/project-residential.webp'
import projectCommercial from '../assets/images/project-commercial.webp'
import projectGround from '../assets/images/project-ground.webp'
import savingsBanner from '../assets/images/savings-banner.webp'
import ctaPanel from '../assets/images/cta-panel.webp'

export const images = {
  hero,
  installationTeam,
  savingsBanner,
  ctaPanel,
  services: {
    residential: serviceResidential,
    commercial: serviceCommercial,
    battery: serviceBattery,
    upgrades: serviceUpgrades,
    maintenance: serviceMaintenance,
    consultation: serviceConsultation,
  },
  projects: {
    residential: projectResidential,
    commercial: projectCommercial,
    ground: projectGround,
  },
}
