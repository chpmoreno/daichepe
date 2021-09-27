import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const COLOMBIA = [
  {
    name: 'bogota',
    image: 'bogota.JPG'
  },
  {
    name: 'cartagena',
    image: 'cartagena.JPG'
  },
  {
    name: 'ciudadperdida',
    image: 'ciudadperdida.JPG'
  },
  {
    name: 'cocora',
    image: 'cocora.JPG'
  },
  {
    name: 'pozosvilla',
    image: 'pozosvilla.JPG'
  },
  {
    name: 'tayrona',
    image: 'tayrona.JPG'
  },
  {
    name: 'villadeleyva',
    image: 'villadeleyva.JPG'
  },
  {
    name: 'barichara',
    image: 'barichara.JPG'
  }
];

const Colombia = () => (
  <div>
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "colombia" } }) {
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
        }
      `}
      render={data => (
        <ColombiaGrid>
          {COLOMBIA.map(({ name, image }) => {
            const img = data.allFile.edges.find(
              ({ node }) => node.relativePath === image
            ).node;
            return (
              <div key={name}>
                <Img fluid={img.childImageSharp.fluid} alt={name} />
              </div>
            );
          })}
        </ColombiaGrid>
      )}
    />
  </div>
);

const ColombiaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  grid-template-rows: min-content;
  grid-gap: 20px;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

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

export default Colombia;
