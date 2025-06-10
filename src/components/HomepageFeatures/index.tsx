import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kernel-based su and root access management',
    description: (
      <>
        Secure root access management at the kernel level.
      </>
    ),
  },
  {
    title: 'Not based on OverlayFS module system',
    description: (
      <>
        Based on Magic Mount from 5ec1cff.
      </>
    ),
  },
  {
    title: 'App Profile',
    description: (
      <>
        Lock root privileges in a cage.
      </>
    ),
  },
  {
    title: 'Bringing back non-GKI/GKI 1.0 support',
    description: (
      <>
        Enhanced compatibility for older devices.
      </>
    ),
  },
  {
    title: 'More customization',
    description: (
      <>
        Extensive customization options available.
      </>
    ),
  },
  {
    title: 'Support for KPM kernel modules',
    description: (
      <>
        Full KernelPatch Module functionality.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
