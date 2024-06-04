// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { Container, Header } from '@cloudscape-design/components';

export function BaseStaticWidget({ config }) {
//   const Wrapper = config.provider ?? React.Fragment;
  return (
    <div className='staticWidget'>
        <Container
          header={<Header variant='h2'>heading</Header>}
          fitHeight={true}
          footer={<Header>Footer</Header>}
          disableContentPaddings={true}
        >
          {/* <config.content /> */}
        </Container>
    </div>
  );
}
