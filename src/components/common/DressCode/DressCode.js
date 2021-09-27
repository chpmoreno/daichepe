import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const DRESSCODE = [
  {
    name: 'dc1',
    image: 'dc1.JPG'
  },
  {
    name: 'dc2',
    image: 'dc2.JPG'
  },
  {
    name: 'dc3',
    image: 'dc3.JPG'
  },
  {
    name: 'dc4',
    image: 'dc4.JPG'
  },
  {
    name: 'dc5',
    image: 'dc5.JPG'
  },
  {
    name: 'dc6',
    image: 'dc6.JPG'
  },
  {
    name: 'dc7',
    image: 'dc7.JPG'
  },
  {
    name: 'dc8',
    image: 'dc8.JPG'
  }
];

const DressCode = () => (
  <div>
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "dresscode" } }) {
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
        <DressCodeGrid>
          {DRESSCODE.map(({ name, image }) => {
            const img = data.allFile.edges.find(
              ({ node }) => node.relativePath === image
            ).node;

            return (
              <div key={name}>
                <Img fluid={img.childImageSharp.fluid} alt={name} />
              </div>
            );
          })}
        </DressCodeGrid>
      )}
    />
  </div>
);

const DressCodeGrid = styled.div`
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

export default DressCode;
