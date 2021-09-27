import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Info from '@sections/Info';
import Evento from '@sections/Evento';
import Historia from '@sections/Historia';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Info />
    <Evento />
    <Historia />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
