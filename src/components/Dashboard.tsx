import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <section className={["flex flex-1 w-full bg-lime-100", styles.header].join(" ")}>
      <div>
        Dashboard
      </div>
    </section>
  )
}

export default Dashboard;
