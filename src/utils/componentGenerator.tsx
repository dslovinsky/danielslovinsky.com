import Hero from 'components/Hero';
import SkillBar from 'components/SkillBar';

const componentGenerator = (component: TemplatePageFragment['components'][number]) => {
  switch (component?.__typename) {
    case 'ComponentSkillBarRecord':
      return <SkillBar {...component} />;
    case 'ComponentHeroRecord':
      return <Hero {...component} />;
    default:
      return null;
  }
};

export default componentGenerator;
