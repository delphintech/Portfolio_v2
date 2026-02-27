// TravelPal
import tpAround from "../assets/images/projects/travelpal/Travelpal - around.png"
import tpChat from "../assets/images/projects/travelpal/Travelpal - chat.png"
import tpMap from "../assets/images/projects/travelpal/Travelpal - Dashboard map.png"
import tpPics from "../assets/images/projects/travelpal/Travelpal - Dashboard pics.png"
import tpFeed from "../assets/images/projects/travelpal/Travelpal - feed.png"
import tpCover from "../assets/images/projects/travelpal/Travelpal - cover.jpg"

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

// TODO: key festures, adapt size of picture div, fix carrousel, list other projects

export const projects_data = [
    {
      title: 'TravelPal',
      description: "A social platform for creating, tracking, and sharing your travel journals and adventures with the world.",
      cover: tpCover,
      image: [tpAround, tpChat, tpMap, tpPics, tpFeed],
      techs: ['Ruby on Rails', 'Stimulus Js', 'PostgreSQL', 'MapBox API', 'Bootstrap'],
      role: 'FullStack Developper (team of 3)',
      features: [
        'Guided meditation sessions with customizable durations and themes',
        'Habit tracking with streak counters and visual progress indicators',
        'Daily mood logging with insights and patterns analysis',
        'Breathing exercises with animated visual guides',
        'Pomodoro timer integrated with break reminders',
        'Offline mode for uninterrupted practice',
      ],
      github: "https://github.com/delphintech/travelpal",
      link: null
    }
  ];

