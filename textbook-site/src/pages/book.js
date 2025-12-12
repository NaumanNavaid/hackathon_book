// import React from 'react';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './book.module.css';

// const curriculum = [
//   {
//     partTitle: 'Part 1: Foundations',
//     description: 'Understanding the fundamentals of Physical AI and embodied intelligence.',
//     colorClass: 'partBlue',
//     chapters: [
//       { title: 'What is Physical AI?', link: '/docs/part-i/what-is-physical-ai', difficulty: 'Beginner', time: '45 min' },
//       { title: 'Embodied Intelligence', link: '/docs/part-i/efficient-intelligence', difficulty: 'Intermediate', time: '60 min' },
//       // 👇 FIXED: Removed 'chapter-3-' prefix (assuming file is sensors-actuators-physical-limits.mdx)
//       // ⚠️ CHECK: If your file IS named 'chapter-3-...', add it back.
//       { title: 'Sensors & Actuators', link: '/docs/part-i/sensors-actuators-physical-limits', difficulty: 'Intermediate', time: '75 min' },
//     ]
//   },
//   {
//     partTitle: 'Part 2: ROS 2 Fundamentals',
//     description: 'Master the Robot Operating System architecture and core concepts.',
//     colorClass: 'partRed',
//     chapters: [
//       { title: 'ROS 2 Architecture', link: '/docs/part-ii/ros2-fundamentals', difficulty: 'Beginner', time: '60 min' },
//       { title: 'Nodes & Topics', link: '/docs/part-ii/nodes-topics-services-actions', difficulty: 'Intermediate', time: '55 min' },
//       { title: 'URDF & TF Trees', link: '/docs/part-ii/robot-description-tf-trees', difficulty: 'Intermediate', time: '60 min' },
//     ]
//   },
//   {
//     partTitle: 'Part 3: Simulation',
//     description: 'Building digital twins, physics engines, and synthetic data pipelines.',
//     colorClass: 'partPurple',
//     chapters: [
//       // 👇 FIXED: Removed 'chapter-7-' prefix (assuming file is gazebo-physics-simulation.mdx)
//       { title: 'Gazebo Physics', link: '/docs/part-iii/gazebo-physics-simulation', difficulty: 'Intermediate', time: '50 min' },
      
//       // 👇 FIXED: Added '-visualization' to match your screenshot (chapter-6-unity-robotics-visualization.mdx)
//       { title: 'Unity for Robotics', link: '/docs/part-iii/chapter-6-unity-robotics-visualization', difficulty: 'Advanced', time: '90 min' },
//     ]
//   }
// ];

// function ChapterCard({ title, link, difficulty, time }) {
//   let badgeClass = 'badge--secondary';
//   if (difficulty === 'Beginner') badgeClass = 'badge--success';
//   if (difficulty === 'Advanced') badgeClass = 'badge--danger';

//   return (
//     <Link to={link} className={styles.cardLink}>
//       <div className={styles.chapterCard}>
//         <div className={styles.cardHeader}>
//           <span className={styles.chapterLabel}>Chapter</span>
//           <span className={clsx('badge', badgeClass)}>{difficulty}</span>
//         </div>
//         <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
//         <div className={styles.cardFooter}>
//           <span className={styles.timePill}>⏱️ {time}</span>
//           <span className={styles.arrow}>→</span>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default function BookPage() {
//   return (
//     <Layout title="Curriculum" description="Physical AI Course Structure">
//       <main className={styles.bookContainer}>
//         <div className="container padding-vert--xl">
//           <div className="text--center margin-bottom--xl">
//             <Heading as="h1" className={styles.mainTitle}>Physical AI <span className="text--primary">& Robotics</span></Heading>
//             <p className="hero__subtitle">A comprehensive guide to building intelligent agents.</p>
//           </div>
          
//           {curriculum.map((part, idx) => (
//             <div key={idx} className={styles.partSection}>
//               <div className={clsx(styles.partHeader, styles[part.colorClass])}>
//                 <Heading as="h2" style={{color: 'white'}}>{part.partTitle}</Heading>
//                 <p style={{color: 'rgba(255,255,255,0.9)', margin: 0}}>{part.description}</p>
//               </div>
//               <div className="row">
//                 {part.chapters.map((chapter, cIdx) => (
//                   <div key={cIdx} className="col col--4 margin-bottom--lg">
//                     <ChapterCard {...chapter} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </Layout>
//   );
// }
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './book.module.css';

const curriculum = [
  {
    partTitle: 'Part 1: Foundations',
    description: 'Understanding the fundamentals of Physical AI and embodied intelligence.',
    colorClass: 'partBlue',
    chapters: [
      // Check your Part I folder filenames. Assuming standard naming:
      { title: 'What is Physical AI?', link: '/docs/part-i/what-is-physical-ai', difficulty: 'Beginner', time: '45 min' },
      { title: 'Embodied Intelligence', link: '/docs/part-i/efficient-intelligence', difficulty: 'Intermediate', time: '60 min' },
    ]
  },
  {
    partTitle: 'Part 2: ROS 2 Fundamentals',
    description: 'Master the Robot Operating System architecture and core concepts.',
    colorClass: 'partRed',
    chapters: [
        // Ensure these match your part-ii filenames exactly
      { title: 'ROS 2 Architecture', link: '/docs/part-ii/ros2-fundamentals', difficulty: 'Beginner', time: '60 min' },
      { title: 'Nodes & Topics', link: '/docs/part-ii/nodes-topics-services-actions', difficulty: 'Intermediate', time: '55 min' },
    ]
  },
  {
    partTitle: 'Part 3: Simulation',
    description: 'Building digital twins, physics engines, and synthetic data pipelines.',
    colorClass: 'partPurple',
    chapters: [
      // 👇 FIXED: Matched filename from your screenshot (image_ba0cca.png)
      { title: 'Physics Simulations', link: '/docs/part-iii/chapter-07-physics-simulations', difficulty: 'Intermediate', time: '50 min' },
      
      // 👇 FIXED: Matched filename from your screenshot
      { title: 'Unity for Robotics', link: '/docs/part-iii/chapter-06-unity-robotics-visualization', difficulty: 'Advanced', time: '90 min' },
    ]
  }
];

function ChapterCard({ title, link, difficulty, time }) {
  let badgeClass = 'badge--secondary';
  if (difficulty === 'Beginner') badgeClass = 'badge--success';
  if (difficulty === 'Advanced') badgeClass = 'badge--danger';

  return (
    <Link to={link} className={styles.cardLink}>
      <div className={styles.chapterCard}>
        <div className={styles.cardHeader}>
          <span className={styles.chapterLabel}>Chapter</span>
          <span className={clsx('badge', badgeClass)}>{difficulty}</span>
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <div className={styles.cardFooter}>
          <span className={styles.timePill}>⏱️ {time}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function BookPage() {
  return (
    <Layout title="Curriculum" description="Physical AI Course Structure">
      <main className={styles.bookContainer}>
        <div className="container padding-vert--xl">
          <div className="text--center margin-bottom--xl">
            <Heading as="h1" className={styles.mainTitle}>Physical AI <span className="text--primary">& Robotics</span></Heading>
            <p className="hero__subtitle">A comprehensive guide to building intelligent agents.</p>
          </div>
          {curriculum.map((part, idx) => (
            <div key={idx} className={styles.partSection}>
              <div className={clsx(styles.partHeader, styles[part.colorClass])}>
                <Heading as="h2" style={{color: 'white'}}>{part.partTitle}</Heading>
                <p style={{color: 'rgba(255,255,255,0.9)', margin: 0}}>{part.description}</p>
              </div>
              <div className="row">
                {part.chapters.map((chapter, cIdx) => (
                  <div key={cIdx} className="col col--4 margin-bottom--lg">
                    <ChapterCard {...chapter} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}