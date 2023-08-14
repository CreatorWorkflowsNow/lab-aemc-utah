import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const FeatureList = [
  {
    title: 'Collaborate to Accelerate',
    Svg: require('../../static/img/bus-management-console.svg').default,
    description: (
      <>
        Revolutionizing Enterprise App Dev at Scale
      </>
    ),
    to: "/docs/Introduction/before-you-begin/",
  }
];

function Feature({Svg, title, description, to}) {
  return (
    <Link to={to} className={clsx(styles.featureLink)}>
      <div className={clsx(styles.featureRow, styles.featureBox)}>
        <div className={styles.featureSvgContainer}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureContent}>
          <h3>{title}</h3>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p style={{marginRight: '10px'}}>{description} <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featureContainer)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
