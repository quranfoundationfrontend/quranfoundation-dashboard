import { HelpPanel } from '@cloudscape-design/components'
import React from 'react'

const Header = () => {
  return (
    <HelpPanel
    header={<h2>Service</h2>}
    footer={
      <ExternalLinkGroup
        items={[
          { href: '#', text: 'User Guide for Linux Instances' },
          { href: '#', text: 'User Guide for Windows Instances' },
          { href: '#', text: 'API Reference' },
          { href: '#', text: 'EC2 section of the AWS CLI Reference' },
          { href: '#', text: 'EC2 Instance Connect API Reference' },
        ]}
      />
    }
  >
    <p>
      Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizeable computing
      capacity&mdash;literally, servers in Amazon's data centers&mdash;that you use to build and host your software
      systems.
    </p>
  </HelpPanel>
  )
}

export default Header