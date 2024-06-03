"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import "@cloudscape-design/global-styles/index.css"

import {
  AppLayout,
  BreadcrumbGroup,
  Container,
  ContentLayout,
  Flashbar,
  Header,
  HelpPanel,
  Link,
  SideNavigation,
  SplitPanel,
} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';

const inter = Inter({ subsets: ["latin"] });



// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <I18nProvider messages={[messages]}>
    
      <AppLayout
        // breadcrumbs={
        // //   <BreadcrumbGroup
        // //     items={[
        // //       { text: 'Home', href: '#' },
        // //       { text: 'Service', href: '#' },
        // //     ]}
        // //   />
        // // }
        navigationOpen={true}
        navigation={
          <SideNavigation
            header={{
              href: '#',
              text: 'Service name',
            }}
            items={[{ type: 'link', text: `Page #1`, href: `#` }]}
          />
        }
        notifications={
          <Flashbar
            items={[
              {
                type: 'info',
                dismissible: true,
                content: 'This is an info flash message.',
                id: 'message_1',
              },
            ]}
          />
        }
        toolsOpen={true}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={
          <ContentLayout
            // header={
            //   <Header variant="h1" info={<Link variant="info">Info</Link>}>
            //     Page header
            //   </Header>
            // }
          >
          {children}
          </ContentLayout>
        }
        // splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}
      />
    </I18nProvider>
        </body>
    </html>
  );
}
