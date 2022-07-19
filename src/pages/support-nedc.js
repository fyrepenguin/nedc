import * as React from 'react';
import Header from '../components/Common/Header';
import Support from '../components/Support/Support';
import Input from '../components/Support/Input';
import PlannedGiving from '../components/Support/PlannedGiving';
import Form from '../components/Support/Form';
import Layout from '../components/Layout/index';

const SupportPage = () => {
  return (
    <Layout>
      <div>
        <Header
          title={'Support NEDC'}
          description="Giving Life. Giving Hope. Building Families"
          cta="Learn More About NDEC"
          ctaLink="/about"
        />
        <Support />
        <Input />
        <PlannedGiving />
        <Form />
      </div>
    </Layout>
  );
};

export default SupportPage;
