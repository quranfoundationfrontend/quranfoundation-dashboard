"use client"
import React from 'react'

// import { WidgetConfig } from '../interfaces';
import { Box, ColumnLayout , Header, Link } from '@cloudscape-design/components';
// import { Box, ColumnLayout, Link } from '@cloudscape-design/components';


const DashboardOverview = () => {
  return (
<>
<Header variant="h2" description="A summary of our valued donors and their contributions.

">
The Quran Foundation's Financial <em>Overview</em>
    </Header>

    <ColumnLayout columns={4} variant="text-grid" minColumnWidth={170}>
      <div>
        <Box variant="awsui-key-label">Running instances</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Running instances (14)">
          14
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Volumes</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Volumes (126)">
          126
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Security groups</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Security groups (116)">
          116
        </Link>
      </div>
      <div>
        <Box variant="awsui-key-label">Load balancers</Box>
        <Link variant="awsui-value-large" href="#" ariaLabel="Load balancers (28)">
          28
        </Link>
      </div>
    </ColumnLayout>


</>  )
}

export default DashboardOverview