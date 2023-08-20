import type { FC, ReactNode } from 'react';

interface SectionProps extends SectionFragment {
  children: ReactNode;
}

// TODO: Add vertical padding
const Section: FC<SectionProps> = ({ children, id, idLink }) => <section id={idLink || id}>{children}</section>;

export default Section;
