import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['installation'],
    },
    {
      type: 'category',
      label: 'Documentation',
      items: ['features', 'compatibility'],
    },
    {
      type: 'category',
      label: 'Support',
      items: ['troubleshooting', 'links'],
    },
    'license',
  ],
};

export default sidebars;
