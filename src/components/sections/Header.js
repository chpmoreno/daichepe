import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { ReactComponent as Hearth } from '@images/illustrations/hearth.svg';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        illustrations_hearth: file(
          sourceInstanceName: { eq: "illustrations" }
          name: { eq: "hearth" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Illustration>
              <Hearth/>
            </Illustration>
            <IllustrationMobile>
              <Hearth/>
            </IllustrationMobile>
            <Text>
              <h1>
                Nos
                <br />
                Casamos!!!
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://chpmoreno.typeform.com/to/QSxCxZY0">
                  Responde la encuesta &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
              <p>
                <StyledExternalLink href="https://chpmoreno.typeform.com/to/QSxCxZY0">
                  Answer the survey &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
              <br />
              <br />
              <br />
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Illustration = styled.figure`
  width: 100%;
  margin: 0;

  > svg {
    width: 150%;
    margin-bottom: -5%;
    max-width: ${props => props.theme.screen.md};
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const IllustrationMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: -10%;
  margin-bottom: -30%;

  > svg {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 30px;

    > ${Illustration} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
