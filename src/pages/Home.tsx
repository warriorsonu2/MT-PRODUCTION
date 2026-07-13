import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Team } from '../components/Team';
import { Contact } from '../components/Contact';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Hero />
      <About preview={true} />
      <Projects preview={true} />
      <Team preview={true} />
      <Services preview={true} />
      <Contact preview={true} />
    </>
  );
}
