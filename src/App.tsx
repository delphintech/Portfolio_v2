import './assets/style.css'

import { Landing } from './sections/landing'
import { About } from './sections/about'
import { Projects } from './sections/projects'
import { Skills } from './sections/skills'
import { Contact } from './sections/contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
