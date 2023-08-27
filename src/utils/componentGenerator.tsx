import Hero from 'components/Hero';
import SkillBar from 'components/SkillBar';

const componentGenerator = (component: TemplatePageFragment['components'][number]) => {
  switch (component?.__typename) {
    case 'ComponentHeroRecord':
      return <Hero {...component} />;
    case 'ComponentSkillBarRecord':
      return <SkillBar {...component} />;
    default:
      return null;
  }
};

export default componentGenerator;
