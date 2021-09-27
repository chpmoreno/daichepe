import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';

import { ReactComponent as Chill } from '@images/illustrations/chill.svg';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_story: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tell_story" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="evento" accent>
        <StyledContainer>
          <Grid>
            <Illustration>
              <Chill/>
            </Illustration>
            <Text>
              <h1>
                Sobre la celebración
              </h1>
              <br />
              <p>
                Luego de unos cuantos años de romance, aventuras y mucho aprendizaje, el 25 de diciembre de 2019 
                por fin nos pusimos serios (José se puso serio <span role="img" aria-label="broma">🤪</span>) y decidimos casarnos. Tuvimos un pequeño retraso
                debido a un tal COVID, aunque el sueño de compartir nuestra felicidad y celebrar nuestro amor
                al lado de nuestra familia más cercana y nuestros mejores amigos siempre se mantuvo. Por esto nos casamos por la iglesia el 
                día 18 de Diciembre del 2021, en Villa de Leyva, Colombia. Queremos que disfrutes este día de la mejor manera 
                posible: rezando <span role="img" aria-label="rezar">😇</span>, comiendo <span role="img" aria-label="comer">🤤</span>, 
                hablando carreta <span role="img" aria-label="gafas">😎</span>, bailando <span role="img" aria-label="bailar">💃🏼🕺🏼</span> y 
                molestando <span role="img" aria-label="celebrar">🥳</span>. La idea es que nos reunamos 
                todos y saquemos toda esa energía reprimida durante estos últimos años. No esperes mucho protocolo, pero eso si, 
                lleva contigo tu mejor actitud, tu mejor pinta y tus mejores pasos; nosotros nos encargamos del resto.
              </p>
            </Text>
          </Grid>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Illustration = styled.figure`
  width: 100%;
  margin: 0;

  > svg {
    width: 100%;
    height: auto;
    max-width: ${props => props.theme.screen.md};
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

export default UsedBy;
