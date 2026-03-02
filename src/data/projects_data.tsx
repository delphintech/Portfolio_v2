// BabyPHR
import bpCover from "../assets/images/projects/babyPhr/baby_phr_cover.jpg"
import bpGlobal from "../assets/images/projects/babyPhr/BabyPhr_global.png"
import bpIndividual from "../assets/images/projects/babyPhr/BabyPhr_individual.png"
import bpVaccine from "../assets/images/projects/babyPhr//BabyPhr_vaccines.png"
import bpList from "../assets/images/projects/babyPhr/BabyPhr_list.png"

// TravelPal
import tpAround from "../assets/images/projects/travelpal/Travelpal - around.png"
import tpChat from "../assets/images/projects/travelpal/Travelpal - chat.png"
import tpMap from "../assets/images/projects/travelpal/Travelpal - Dashboard map.png"
import tpPics from "../assets/images/projects/travelpal/Travelpal - Dashboard pics.png"
import tpFeed from "../assets/images/projects/travelpal/Travelpal - feed.png"
import tpCover from "../assets/images/projects/travelpal/Travelpal - cover.jpg"

// Petit Scarabé
import psDash from "../assets/images/projects/petitScarabee/dashboard_lpt.png"
import psLanding from "../assets/images/projects/petitScarabee/landing_lpt.png"
import psLessonsList from "../assets/images/projects/petitScarabee/list_lpt.png"
import psLessonPage from "../assets/images/projects/petitScarabee/lesson_lpt.png"
import psCover from "../assets/images/projects/petitScarabee/Petit scarabée - cover.avif"

export type Project = {
    title: string;
    description: string;
    cover: string
    image: string | string[];
    techs: string[];
    role: string;
    features: string[];
    github: string;
    link: string | null;
  } | null;

export const projects_data = [
      {
      title: "Baby's Patient Health Record",
      description: "A pediatric health tracking app that helps doctors monitor infant growth, vaccination progress, and overall development at a glance.",
      cover: bpCover,
      image: [bpGlobal, bpIndividual, bpVaccine, bpList],
      techs: ['Node.js', 'React', 'Typescript', 'PostgreSQL', 'Tailwind'],
      role: 'FullStack Developper (solo)',
      features: [
        "Individual growth charts for weight and height, benchmarked against standard pediatric curves.",
        "Built-in vaccination timeline to track recommended doses and upcoming milestones.",
        "Global trend analytics to visualize population-level weight and height evolution.",
        "Doctor-friendly dashboard with each baby's profile, including name, age, and gender.",
      ],
      github: "https://github.com/delphintech/baby_PHR",
      link: 'https://baby-phr.vercel.app/'
    },
    {
      title: 'TravelPal',
      description: "A social platform for creating, tracking, and sharing your travel journals and adventures with the world.",
      cover: tpCover,
      image: [tpAround, tpChat, tpMap, tpPics, tpFeed],
      techs: ['Ruby on Rails', 'Stimulus Js', 'PostgreSQL', 'MapBox API', 'Bootstrap'],
      role: 'FullStack Developper (team of 3)',
      features: [
        'Interactive map with geotagged photo memories for each trip.',
        'Live feed of travel moments shared by people around you.',
        'Map with nearby travelers to connect with your local travel community.',
        'Real time chat to share tips, stories, and plans to fellow travelers.'
      ],
      github: "https://github.com/delphintech/travelpal",
      link: null
    },
      {
      title: 'Petit Scarabée',
      description: "A peer-to-peer marketplace where individuals can offer, discover, and book lessons with independent teachers.",
      cover: psCover,
      image: [psDash, psLanding, psLessonsList, psLessonPage],
      techs: ['Ruby on Rails', 'Stimulus Js', 'PostgreSQL', 'MapBox API', 'Bootstrap'],
      role: 'FullStack Developper (team of 3)',
      features: [
        'Interactive, geolocation-powered map of nearby teachers.',
        'Dynamic calendar and real-time availability handling.',
        'Teacher dashboard to manage lesson offers and booking requests.',
        'Complete marketplace flow: offering, listing and booking in one platform.'
      ],
      github: "https://github.com/delphintech/PETIT-SCARABEE",
      link: null
    }
  ];