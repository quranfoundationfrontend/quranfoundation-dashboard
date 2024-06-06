"use client"
import { BreadcrumbGroup,Link, ContentLayout, Header, Container, SpaceBetween } from '@cloudscape-design/components'
import React, { useEffect } from 'react'
// import DashboardOverview from '../dashboardWidgets/DashboardOverview'
import ServiceHealth from '../dashboardWidgets/ServiceHealth'

const DashboardOverview = dynamic(() => import('../dashboardWidgets/DashboardOverview'), {
  ssr: false
});

const Page = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use window object
      console.log(window.location.href);
    }
  }, []);

  return (
 <>
  <BreadcrumbGroup
            items={[
              { text: 'Home', href: '#' },
              { text: 'Service', href: '#' },
            ]}
          />
 <Header variant="h1" info={<Link variant="info">Info</Link>}>
    Dashboard Overview
</Header>

<SpaceBetween direction='horizontal'>
    <Container >
        <DashboardOverview/>
    </Container>

    <Container>
<ServiceHealth/>

    </Container>
</SpaceBetween>
 
 </>
  )
}

export default Page