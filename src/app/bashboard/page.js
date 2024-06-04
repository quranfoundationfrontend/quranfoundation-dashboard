"use client"
import { BreadcrumbGroup, Link ,Button, Container, Grid, Header, SpaceBetween } from '@cloudscape-design/components';
import React, { useState } from 'react'
import DashboardOverview from '../dashboardWidgets/DashboardOverview';
import ServiceHealth from '../dashboardWidgets/ServiceHealth';
import { BaseStaticWidget } from '../BaseStaticWidget/BaseStaticWidget';
import BeneficiariesChart from '../components/Charts/BeneficiariesChart';
import RaisedByType from '../components/Charts/RaisedByType';
import DemoLineChart from '../components/Charts/DemoLineChart';
import RaisedTypesCharts from '../components/Charts/RaisedTypesCharts';
import Volunteer from '../components/Charts/Volunteer ';

const page = () => {
    // const appLayoutRef = useRef<AppLayoutProps.Ref>(null);

    const [toolsOpen, setToolsOpen] = useState(false);
    const [splitPanelOpen, setSplitPanelOpen] = useState(false);
    // const [splitPanelSize, setSplitPanelSize] = useLocalStorage('React-ConfigurableDashboard-SplitPanelSize', 360);
    // const [ref, layout, setLayout, resetLayout] = useItemsLayout();
    // const [toolsContent, setToolsContent] = useState<React.ReactNode>(() => <DashboardMainInfo />);

    const loadHelpPanelContent = (content) => {
        setToolsOpen(true);
        setToolsContent(content);
        appLayoutRef.current?.focusToolsClose();
    };


    return (
        <>
            <BreadcrumbGroup items={[{ text: 'Home', href: '#/' }, { text: 'Dashboard', href: '#/' }]} />


            <Header  variant='h2' 
            info={
                <Link>info</Link>
            }
            actions={
                    <SpaceBetween size="xs" direction="horizontal">
                        <Button >Reset to default layout</Button>
                        <Button iconName="add-plus" >
                            Add widget
                        </Button>
                    </SpaceBetween>
                }
           >
            Dashboard Overview

            </Header>
               
            <Grid
      gridDefinition={[
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
        { colspan: { l: 12, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
        { colspan: { l: 4, m: 4, default: 4 } },
        { colspan: { l: 4, m: 4, default: 4 } },
        { colspan: { l: 4, m: 4, default: 4 } },
        { colspan: { l: 6, m: 6, default: 12 } },
        { colspan: { l: 8, m: 8, default: 12 } },
        { colspan: { l: 4, m: 4, default: 12 } },
      ]}
    > 
    {/* col 1 */}
    <div className='mt-2'>

        <Container  description="A summary of our valued donors and their contributions." 
        // header={<Header variant='h2'>The Quran Foundation's Financial Overview</Header>} 
        fitHeight={true}>
      <DashboardOverview/>
        </Container>
    </div>
{/* col 2 */}
        <Container fitHeight={true}>
      <ServiceHealth/>
        </Container>

{/* col 3 */}
<Container header={<Header variant='h2'>Raised By Month</Header>} fitHeight={true}>
    <BeneficiariesChart/>
</Container>

{/* col 4 */}
<Container header={<Header variant='h2'>Raised By Type</Header>}  fitHeight={true}>
    <RaisedTypesCharts/>
</Container>


{/* col 5 , 6 , 7 */}
<Container header={<Header variant='h2'>Donors By Type</Header>}>
    <Volunteer/>
</Container>

<Container header={<Header variant='h2'>Beneficiaries by Type
</Header>}>
    <Volunteer/>
</Container>
<Container header={<Header variant='h2'>Volunteer by Type

</Header>}>
    <Volunteer/>
</Container>

    </Grid>

        </>
    )
}

export default page