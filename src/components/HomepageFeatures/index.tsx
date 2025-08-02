import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  image: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kernel-based su and root access management',
    image: '/svg/feature1.svg',
    description: (
      <>
        Secure root access management at the kernel level.
      </>
    ),
  },
  {
    title: 'Not based on OverlayFS module system',
    image: '/svg/feature2.svg',
    description: (
      <>
        Based on Magic Mount from 5ec1cff.
      </>
    ),
  },
  {
    title: 'App Profile',
    image: '/svg/feature3.svg',
    description: (
      <>
        Lock root privileges in a cage.
      </>
    ),
  },
  {
    title: 'Bringing back non-GKI/GKI 1.0 support',
    image: '/svg/feature4.svg',
    description: (
      <>
        Enhanced compatibility for older devices.
      </>
    ),
  },
  {
    title: 'More customization',
    image: '/svg/feature5.svg',
    description: (
      <>
        Extensive customization options available.
      </>
    ),
  },
  {
    title: 'Support for KPM kernel modules',
    image: '/svg/feature6.svg',
    description: (
      <>
        Full KernelPatch Module functionality.
      </>
    ),
  },
];

function Feature({title, description, image}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard, 'text--center')}>
      <img src={image} alt={title} className={styles.featureImage} />
      <Heading as="h4">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
