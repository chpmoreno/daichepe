import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

import { ReactComponent as DifferentLove } from '@images/illustrations/different_love.svg';

const HISTORIA = [
  {
    name: 'love1',
    image: 'love1.JPG'
  },
  {
    name: 'love2',
    image: 'love2.png'
  },
  {
    name: 'love3',
    image: 'love3.JPG'
  },
  {
    name: 'love4',
    image: 'love4.jpeg'
  },
  {
    name: 'love5',
    image: 'love5.JPG'
  },
  {
    name: 'love6',
    image: 'love6.JPG'
  },
  {
    name: 'love7',
    image: 'love7.JPG'
  },
  {
    name: 'love8',
    image: 'love8.JPG'
  },
  {
    name: 'love9',
    image: 'love9.JPG'
  },
  {
    name: 'love10',
    image: 'love10.jpeg'
  },
  {
    name: 'love11',
    image: 'love11.JPG'
  },
  {
    name: 'love12',
    image: 'love12.JPG'
  }
];

const Historia = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "love" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "illustrations" }
          name: { eq: "different_love" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="historia" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Nuestra historia de amor</h1>
          <HistoriaGrid>
            {HISTORIA.map(({ name, image }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name}/>
                </div>
              );
            })}
          </HistoriaGrid>
          <Art>
            <DifferentLove/>
          </Art>
          <ArtMobile>
            <DifferentLove/>
          </ArtMobile>
          <br />
          <br />
          <div>
            <p>
              El trabajo de nuestros sueños nos unió en una entrevista sin ni siquiera imaginarlo. 
              Trabajamos juntos por un año sin saber que iba ser el comienzo del resto de nuestras vidas. 
              Andábamos cada uno en nuestros cuentos hasta que un viaje a Villa de Leyva y uno que otro guaro 
              nos llevaron al primer beso. La cosa no arrancó muy en serio pero el Banrep nos volvió a unir. 
              Cafés, almuerzos, spinning, comidas, ascensores, un viaje a Estados Unidos, y otro montón de planes 
              nos hicieron inseparables durante dos años.  Nunca fuimos novios, o al menos eso decíamos, pero los 
              dos sabíamos que esta conexión era única y lo suficientemente fuerte para lo que se venía. Nuestros 
              caminos se bifurcaron y el Océano Atlántico nos separó por dos años en los que vivimos altos y bajos, 
              pero en los que el amor se hizo más fuerte y la paciencia se convirtió en nuestra mejor aliada. 
              En la búsqueda por volver a estar más cerquita, inexplicablemente (para José) aunque racionalmente 
              (para Daisy) dejamos de estar en diferentes zonas horarias pero aún nos separaban 3 horas de avión. 
              Las esperas de 3 meses para vernos en Bogotá se convirtieron en viajes y aventuras mucho más frecuentes y Barcelona 
              y Berlín se convirtieron en nuestros hogares. En uno de esos viajes en los que celebraríamos la navidad del 2019, 
              decidimos ponernos nuestras mejores pijamas, cocinamos nuestra receta francesa favorita, abrimos una botella de 
              nuestro vino emblema, y sentados frente al árbol de navidad dijimos ¡Sí! La larga espera terminó y hoy escribimos 
              este relato desde nuestro hogar en Barcelona, a la espera de celebrar contigo en Diciembre y seguir escribiendo
              nuestra historia de amor. 
            </p>
          </div>
        </Container>
      </Section>
    )}
  />
);

const HistoriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  img {
    border: 10px solid #899689;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: center;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 10px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 12%;
  left: 75%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: -30%;
  margin-bottom: -60%;

  > svg {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

export default Historia;
