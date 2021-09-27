import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';

import ExternalLink from '@common/ExternalLink';

import { ReactComponent as Happy2021 } from '@images/illustrations/happy_2021.svg';
import { ReactComponent as Maps } from '@images/illustrations/maps.svg';
import { ReactComponent as Time } from '@images/illustrations/time.svg';

const Info = () => (
  <StaticQuery
    query={graphql`
      query {
        illustrations_happy_2021: file(
          sourceInstanceName: { eq: "illustrations" }
          name: { eq: "happy_2021" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        illustrations_maps: file(
          sourceInstanceName: { eq: "illustrations" }
          name: { eq: "maps" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        illustrations_time: file(
          sourceInstanceName: { eq: "illustrations" }
          name: { eq: "time" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="info">
        <Container>
          <Grid>
            <div>
              <h2>¿Cuándo?</h2>
              <p>
                El 18 de Diciembre del 2021.
              </p>
            </div>
            <Illustration>
              <Happy2021/>
            </Illustration>
          </Grid>
          <Grid inverse>
            <Illustration>
              <Maps/>
            </Illustration>
            <div>
              <h2>¿Dónde?</h2>
              <p>
                En Villa de Leyva, Colombia... obvio... donde empezó el amor!
                <br />
                Específicamente en la 
                {` `}
                <ExternalLink href="https://g.page/hacienda-veracruz?share">
                Hacienda Veracruz
                </ExternalLink>
                .
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>¿A qué hora?</h2>
              <p>
                A las 13:00. Si llegas más tarde te perderás la entrada de los novios. 
                A las 22:00 se acabará la fiesta, aunque no te asustes, será posible quedarnos un rato más en la hacienda.
              </p>
            </div>
            <Illustration>
              <Time/>
            </Illustration>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 36px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 12px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 8px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 8px;
    }

    ${props =>
      props.inverse &&
      `
        ${Illustration} {
          order: 2;
        }
    `}
  }
`;

const Illustration = styled.figure`
  > svg {
    margin: 0;
    max-width: 380px;
    width: 100%;
    height: auto;
  }
`;

export default Info;
