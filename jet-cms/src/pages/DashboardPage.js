import Page from 'components/Page';
import React from 'react';

export default function DashboardPage() {
  return (
    <Page
      className="DashboardPage"
      title="Аналитика"
      breadcrumbs={[{ name: 'Аналитика', active: true }]}
    >
    </Page>
  );
}
