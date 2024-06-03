"use client"
import { Box, ColumnLayout, Header,Link, StatusIndicator } from '@cloudscape-design/components'
import React from 'react'

const ServiceHealth = () => {
  return (
   <>
     <Header
      variant="h2"
      info={
        <Link data-testid="service-health-info-link" onFollow={() => loadHelpPanelContent(<ServiceHealthInfo />)} />
      }
    >
      Service health
    </Header>

    <ColumnLayout columns={2}>
      <div>
        <Box variant="awsui-key-label">Region</Box>
        <div>US East (N. Virginia)</div>
      </div>
      <div>
        <Box variant="awsui-key-label">Status</Box>
        <StatusIndicator type="success">Service is operating normally</StatusIndicator>
      </div>
    </ColumnLayout>
   
   </>
  )
}

export default ServiceHealth