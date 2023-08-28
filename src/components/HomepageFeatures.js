import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Customization',
    Svg: require('../../static/img/Connecting teams-bro.svg').default,
    description: (
      <>
        Vconnct Enterprise is a unique collaboration platform that provides secure and customizable communication. 
      </>
    ),
  },
  {
    title: 'Administration',
    Svg: require('../../static/img/Connected world-bro.svg').default,
    description: (
      <>
       With full control over your data and the ability to integrate seamlessly, it offers a superior experience compared to other platforms.  
      </>
    ),
  },
  {
    title: 'Empower',
    Svg: require('../../static/img/Meeting-bro.svg').default,
    description: (
      <>
        Experience the benefits of Vconnct Enterprise and take charge of your communication needs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
