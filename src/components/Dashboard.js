import React from 'react'

import TableauViz from './TableauViz';

import dashboardStyles from '../styles/dashboard.module.scss';

const Dashboard = () => {
  const vizOptions1 = {
    height: '600px',
    width: '75%'
  }

  const vizOptions2 = {
    height: '600px',
    width: '75%'
  }

  return ( 
    <div>
      <div className={dashboardStyles.vizGrid}>

        <TableauViz vizName='ImpactDashboard' vizOptions={vizOptions2} />
        
        <div className={dashboardStyles.spacer} />

        <TableauViz vizName='DemographicsDashboard' vizOptions={vizOptions2} />

      </div>
    </div>
  )
}

export default Dashboard
