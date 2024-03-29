import Contact from 'components/Contact';
import Hero from 'components/Hero';
import ProjectSlider from 'components/ProjectSlider';
import SkillBar from 'components/SkillBar';

const componentGenerator = (component: TemplatePageFragment['components'][number]) => {
  switch (component?.__typename) {
    case 'ComponentHeroRecord':
      return <Hero {...component} />;
    case 'ComponentSkillBarRecord':
      return <SkillBar {...component} />;
    case 'ComponentProjectSliderRecord':
      return <ProjectSlider {...component} />;
    case 'ComponentContactRecord':
      return <Contact {...component} />;
    default:
      return null;
  }
};

export default componentGenerator;
