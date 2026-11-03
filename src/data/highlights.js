// Curated from "2025 in Review: Highlights from NASA in Silicon Valley"
// https://www.nasa.gov/centers-and-facilities/ames/2025-in-review-highlights-from-nasa-in-silicon-valley/
// Published Dec 18, 2025 (updated Dec 19, 2025).
//
// `imageId` values are NASA Image and Video Library IDs (https://images.nasa.gov),
// each verified to resolve. Highlights without a verified, relevant image
// intentionally have no `imageId` and render a category-colored placeholder.

export const SOURCE = {
  title: '2025 in Review: Highlights from NASA in Silicon Valley',
  url: 'https://www.nasa.gov/centers-and-facilities/ames/2025-in-review-highlights-from-nasa-in-silicon-valley/',
  published: 'Dec 18, 2025',
};

export const CATEGORIES = [
  { id: 'exploration', label: 'Moon & Mars', tag: 'blue' },
  { id: 'science', label: 'Space science', tag: 'purple' },
  { id: 'aeronautics', label: 'Aeronautics', tag: 'teal' },
  { id: 'biology', label: 'Biology & health', tag: 'green' },
  { id: 'technology', label: 'Space technology', tag: 'cyan' },
];

export const highlights = [
  {
    id: 'sls-strakes',
    title: 'From supercomputers to wind tunnels: the road to Artemis II',
    category: 'exploration',
    summary:
      'Supercomputer simulations and wind-tunnel testing showed how adding strakes to the SLS core stage can smooth airflow.',
    detail:
      'By combining the NASA Advanced Supercomputing facility and the Unitary Plan Wind Tunnel at NASA Ames, researchers modeled an adjustment to the Space Launch System rocket. For Artemis II, a pair of six-foot-long strakes will be added to the core stage to smooth vibrations induced by airflow during ascent, improving the safety of the integrated vehicle.',
    fact: { value: '6 ft', label: 'strakes added to the SLS core stage' },
    tags: ['Artemis II', 'SLS', 'Supercomputing'],
  },
  {
    id: 'bennu-gum',
    title: 'A “gum-like” material found in asteroid Bennu samples',
    category: 'science',
    summary:
      'Ames researchers found a never-before-seen gum-like substance in pristine samples delivered by OSIRIS-REx.',
    detail:
      'The material likely formed in the early days of the solar system as Bennu’s young parent asteroid warmed. Such complex molecules could have provided some of the chemical precursors that helped trigger life on Earth, which matters to scientists studying how life began and whether it exists beyond our planet.',
    fact: { value: '30 µm', label: 'width of the analyzed Bennu fragment' },
    tags: ['OSIRIS-REx', 'Astrobiology', 'Asteroids'],
    imageId: 'jason2',
    imageAlt: 'A vial containing a sample of asteroid Bennu',
    imageCredit: 'NASA / James Tralie (Goddard)',
  },
  {
    id: 'viper',
    title: 'VIPER gets a ride to the Moon’s South Pole',
    category: 'exploration',
    summary:
      'NASA awarded Blue Origin a task order to deliver the VIPER rover to the lunar surface in late 2027.',
    detail:
      'VIPER (Volatiles Investigating Polar Exploration Rover) will search for volatile resources such as ice and collect science data to support future exploration of the Moon and Mars. The award is part of the Artemis campaign and the Commercial Lunar Payload Services initiative.',
    fact: { value: '2027', label: 'planned VIPER delivery to the Moon' },
    tags: ['Artemis', 'CLPS', 'Lunar ice'],
    imageId: 'ACD25-0038-027',
    imageAlt: 'VIPER rover during an operational readiness test at NASA Ames',
    imageCredit: 'NASA / Don Richey',
  },
  {
    id: 'acero',
    title: 'Testing remote wildfire response from the sky',
    category: 'aeronautics',
    summary:
      'ACERO validated a portable system for airspace management in poor visibility, a key barrier to aerial firefighting.',
    detail:
      'NASA’s Advanced Capabilities for Emergency Response Operations (ACERO) ran its first flight demonstration in Salinas, California in March 2025, testing information sharing, airspace management, communication relay, and aircraft deconfliction with the Portable Airspace Management System.',
    fact: { value: '24/7', label: 'goal for wildfire monitoring and response' },
    tags: ['ACERO', 'Wildfire', 'Drones'],
    imageId: 'ACD24-0180-029',
    imageAlt: 'ACERO wildfire response technology at NASA Ames',
    imageCredit: 'NASA (2024 image)',
  },
  {
    id: 'venus-heatshield',
    title: 'Heat shield installed on first private spacecraft bound for Venus',
    category: 'technology',
    summary:
      'NASA’s HEEET heat shield, invented at Ames, covers the capsule Rocket Lab will use to study Venus’ clouds.',
    detail:
      'NASA Ames teams work with private companies to turn NASA materials into solutions. The Heatshield for Extreme Entry Environment Technology covers the bottom of the capsule that will study the clouds of Venus for signs of life in the first private mission to the planet, led by Rocket Lab with MIT.',
    fact: { value: '1st', label: 'private mission to Venus' },
    tags: ['HEEET', 'Rocket Lab', 'Venus'],
  },
  {
    id: 'artemis-visit',
    title: 'Artemis astronauts and Orion leadership visit NASA Ames',
    category: 'exploration',
    summary:
      'Artemis II astronauts Christina Koch and Victor Glover toured the facilities that tested Orion’s thermal protection.',
    detail:
      'Along with Orion leaders Debbie Korth and Luis Saucedo, the astronauts visited Ames facilities used to develop and test Orion’s thermal protection system and to analyze the Artemis I heat shield after its return to Earth.',
    fact: { value: '2', label: 'Artemis II astronauts toured Ames' },
    tags: ['Artemis II', 'Orion', 'Arc Jet'],
    imageId: 'ACD25-0023-024',
    imageAlt: 'Orion astronauts visiting the Ames Entry Systems and Technology Division',
    imageCredit: 'NASA / Don Richey',
  },
  {
    id: 'curiosity-siderite',
    title: 'Curiosity uncovers subsurface clues to Mars’ evolution',
    category: 'science',
    summary:
      'Curiosity found siderite, an iron carbonate mineral that may explain the fate of Mars’ thicker ancient atmosphere.',
    detail:
      'Scientists expected a carbon dioxide-rich atmosphere and liquid water to have formed carbonate minerals, but earlier investigations found less than expected. Powdered subsurface rock analyzed by Curiosity revealed siderite within the sulfate-rich layers of Mount Sharp in Gale Crater.',
    fact: { value: 'Siderite', label: 'iron carbonate found in Gale Crater' },
    tags: ['Curiosity', 'Mars', 'Atmosphere'],
    imageId: 'PIA26554',
    imageAlt: 'Curiosity surveys the Ubajara sampling site on Mars',
    imageCredit: 'NASA / JPL-Caltech / MSSS',
  },
  {
    id: 'starling',
    title: 'Managing satellite traffic in orbit',
    category: 'technology',
    summary:
      'Starling 1.5 showed satellite swarms can share maneuver duties and avoid collisions without waiting on ground control.',
    detail:
      'Managed at Ames in collaboration with SpaceX’s Starlink constellation, the extended mission tested autonomous coordination between spacecraft to improve space traffic management in low Earth orbit as congestion increases.',
    fact: { value: '1.5', label: 'Starling extended mission' },
    tags: ['Starling', 'Autonomy', 'Low Earth orbit'],
    imageId: 'ACD23-0077-003',
    imageAlt: 'Illustration of Starling’s four CubeSats in space',
    imageCredit: 'NASA (illustration)',
  },
  {
    id: 'betelgeuse',
    title: 'Proven true: a companion star to Betelgeuse',
    category: 'science',
    summary:
      'A century-old hypothesis was confirmed when Ames scientist Steve Howell directly observed Betelgeuse’s close companion.',
    detail:
      'Using the Gemini North telescope in Hawai’i and a high-resolution camera built by NASA, researchers observed the companion of Betelgeuse, the 10th brightest star in our night sky. The finding may explain why similar red supergiants vary in brightness over many years.',
    fact: { value: '~100 yr', label: 'old hypothesis validated' },
    tags: ['Betelgeuse', 'Gemini North', 'Stars'],
  },
  {
    id: 'bionutrients',
    title: 'Space-fermented foods make vital nutrients',
    category: 'biology',
    summary:
      'BioNutrients experiments use engineered microorganisms to produce nutrients for future long-duration missions.',
    detail:
      'The first experiment tested a biomanufacturing system for almost six years aboard the International Space Station. The latest experiment launched to the station in August. The goal is familiar fermented foods, such as yogurt, with specific types and amounts of nutrients for crew on Moon and Mars missions.',
    fact: { value: '~6 yrs', label: 'first experiment aboard the ISS' },
    tags: ['BioNutrients', 'ISS', 'Biomanufacturing'],
    imageId: 'iss073e0817663',
    imageAlt: 'Astronaut Jonny Kim with BioNutrients production bags on the space station',
    imageCredit: 'NASA',
  },
  {
    id: 'dsa',
    title: 'Enabling satellite swarms for future astronauts',
    category: 'technology',
    summary:
      'Distributed Spacecraft Autonomy software lets satellite swarms make decisions and adapt with minimal human input.',
    detail:
      'The DSA project tests software that allocates tasks between spacecraft using ad-hoc networking and supports human-swarm commanding. A test rack of 100 spacecraft computers at Ames was used, and the technology was first demonstrated in space aboard Starling.',
    fact: { value: '100', label: 'spacecraft computers in the Ames test racks' },
    tags: ['DSA', 'Swarms', 'Autonomy'],
  },
  {
    id: 'atm-x',
    title: 'Exploring remotely piloted aircraft in U.S. airspace',
    category: 'aeronautics',
    summary:
      'ATM-X supported Wisk Aero in a flight test of a ground-based radar to detect and avoid other aircraft.',
    detail:
      'NASA Ames and its partners tested a tool for remotely piloted aircraft that could move people and goods more efficiently in urban areas. The radar was developed by Collins Aerospace, with the goal of helping air traffic controllers manage more traffic from new entrants while maintaining safety.',
    fact: { value: 'ATM-X', label: 'Air Traffic Management eXploration' },
    tags: ['ATM-X', 'Wisk Aero', 'Advanced air mobility'],
  },
  {
    id: 'cargo-drones',
    title: 'Pushing the boundaries of autonomous cargo drones',
    category: 'aeronautics',
    summary:
      'Cargo drones flew payloads more than 75 miles across North Dakota beyond visual line of sight.',
    detail:
      'NASA partnered with the Department of War in a live flight demonstration showing that drones can fly safely without operators seeing them, even in complex, shared airspace.',
    fact: { value: '75+ mi', label: 'payload flights across North Dakota' },
    tags: ['BVLOS', 'Drones', 'Airspace'],
  },
  {
    id: 'mixed-reality',
    title: 'Advancing mixed reality for pilot training',
    category: 'aeronautics',
    summary:
      'A dozen pilots tested mixed-reality flight simulation in the world’s largest flight simulator.',
    detail:
      'The project combines physical simulators with virtual reality headsets as an alternative to conventional simulator training. The technology could reduce costs and allow a smaller footprint while training pilots on next-generation aircraft.',
    fact: { value: '12', label: 'pilots invited to the Ames study' },
    tags: ['Vertical Motion Simulator', 'VR', 'Training'],
  },
  {
    id: 'fly-box',
    title: 'Flies and fly food for space station DNA studies',
    category: 'biology',
    summary:
      'The Vented Fly Box carried fruit flies to the ISS to study the effects of space travel on the body.',
    detail:
      'Through a Space Act Agreement with Axiom Space, the box carried Drosophila melanogaster aboard a SpaceX Dragon from Kennedy Space Center. Humans and fruit flies share much of their genetic code, so the flies deliver a lot of science in a small, light package.',
    fact: { value: '1', label: 'Space Act Agreement with Axiom Space' },
    tags: ['Drosophila', 'Axiom Space', 'Genetics'],
  },
  {
    id: 'antibiotic-resistance',
    title: 'Studying antibiotic-resistant bacteria in space',
    category: 'biology',
    summary:
      'New ISS studies advance detection of antibiotic-resistant bacteria for astronauts and for patients on Earth.',
    detail:
      'Future Moon and Mars crews will rely on a pre-determined supply of antibiotics, so keeping them effective is a safety priority. Resistant infections can be difficult or impossible to treat and are a leading cause of death worldwide.',
    fact: { value: 'Global', label: 'health concern studied in orbit' },
    tags: ['ISS', 'Genomics', 'Crew health'],
  },
  {
    id: 'biosentinel',
    title: 'Three years in deep space for BioSentinel',
    category: 'biology',
    summary:
      'The shoebox-sized CubeSat marked three years since launching on Artemis I, studying solar radiation storms.',
    detail:
      'BioSentinel, managed at Ames, orbits the Sun more than 48 million miles from Earth. It continues to collect data on how solar radiation storms move through space and where their effects on life are most intense.',
    fact: { value: '48M mi', label: 'from Earth, orbiting the Sun' },
    tags: ['BioSentinel', 'CubeSat', 'Radiation'],
    imageId: 'ACD22-0006-005',
    imageAlt: 'Illustration of BioSentinel entering heliocentric orbit',
    imageCredit: 'NASA (illustration)',
  },
  {
    id: 'astrobee',
    title: 'Astrobee partners to advance space robotics',
    category: 'technology',
    summary:
      'NASA is working with Arkisys to sustain the Astrobee free-flying robots aboard the space station.',
    detail:
      'Launched in 2018, Astrobee has marked multiple first-in-space milestones for robots working beside astronauts. As astronauts return to the Moon, robotic helpers like Astrobee could take over routine maintenance without needing continuous human operation.',
    fact: { value: '2018', label: 'Astrobee launched to the ISS' },
    tags: ['Astrobee', 'Robotics', 'Arkisys'],
    imageId: 'iss072e593606',
    imageAlt: 'An Astrobee free-flying robot on the space station',
    imageCredit: 'NASA',
  },
];

export function imageUrl(id, size = 'medium') {
  return `https://images-assets.nasa.gov/image/${id}/${id}~${size}.jpg`;
}
