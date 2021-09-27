import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FaqItem from '@common/FaqItem';
import Colombia from '@common/Colombia';
import DressCode from '@common/DressCode';

const FAQS = [
  {
    title: '¿Cómo debo ir vestid@?',
    content: () => (
      <>
        La etiqueta sugiere que las chicas usen vestido corto elegante o de un largo hasta debajo de la rodilla, y los chicos traje con corbata o business casual. Sin embargo, lo único que queremos es que estés cómodo y que puedas disfrutar el día y la noche sin preocupaciones, así que simplemente ponte tu mejor pinta y vente preparado para un poco de sol durante el día (18°C-23°C) y algo más de frio durante la noche (11°C-14°C). Aquí te compartimos un par de imágenes a modo de sugerencia:
        <DressCode/>
      </>
    ),
  },
  {
    title: '¿En dónde me puedo quedar? ¿Hay hoteles cerca?',
    content: () => (
      <>
        La Hacienda Veracruz tiene disponibilidad para una cantidad limitada de invitados, intentando dar prioridad 
        a aquellos que vienen desde el extranjero. Dependiendo de las confirmaciones, iremos informando sobre la posibilidad 
        de alojarse aquí mismo. En cualquier caso, a continuación te recomendamos algunos hoteles que se ajustan a la ubicación 
        de la hacienda. Recomendamos hacer reservas con cancelación gratuita en el caso en el que podamos abrirte un espacio. 
        También te recomendamos que te organices con tu grupo más cercano y busques alternativas como AirBnB o fincas más grandes.
          <ul>
            <li>
                <StyledExternalLink href="https://www.google.com/travel/hotels/s/dFz1s">
                  Hotel Santa Cecilia (Sáchica)
                </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.google.com/travel/hotels/s/dZY4W">
                Hotel Casa de Adobe (Villa de Leyva)
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.google.com/travel/hotels/s/Z36v1">
                Posada La Casona (Villa de Leyva)
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.google.com/travel/hotels/s/7oDAi">
                MasClara (Villa de Leyva)
              </StyledExternalLink>
            </li>
          </ul>
      </>
    ),
  },
  {
    title: 'Estamos que les regalamos algo ¿Qué les gustaría de regalo?',
    content: () => (
      <>
        Este es nuestro gran día y queremos celebrarlo por lo alto contigo. Todo corre por nuestra cuenta. Y nuestra cuenta es:
          <ul>
            <li>
              <b>Colombia:</b> Cuenta de Ahorros Bancolombia 57190634762 (Daisy Pacheco).
            </li>
            <li>
              <b>Europa:</b> IBAN DE67 1001 1001 2624 6697 13  (Daisy Pacheco).
            </li>
          </ul>
        Si aún eres de los que prefieren manejar todo en efectivo, no te preocupes, el día del matrimonio habrá una caja
        para depositar el dinero.
      </>
    ),
  },
  {
    title: '¿Cómo hago para llegar a la hacienda?',
    content: () => (
      <>
        <ul>
          <li>
            <b>Desde Bogotá:</b> 162 kilometros (3 horas aproximadamente).
          </li>
          <li>
            <b>Desde Tunja:</b> 35 kilometros (1 hora aproximadamente).
          </li>
          <li>
            <b>Desde Villa de Leyva:</b> 5,6 kilometros (15 minutos aproximadamente).
          </li>
          <li>
            <b>Desde Sáchica:</b> 3,5 kilometros (10 minutos aproximadamente).
          </li>
        </ul>
        Si conduces desde Sáchica hacia Villa de Leyva encontraras el aviso de la hacienda a mano izquierda en el kilometro 2. Si,   
        al contrario, conduces desde Villa de Leyva hacia Sáchica encontrarás el aviso a mano derecha en el kilometro 3,6. Si te 
        pierdes has <StyledExternalLink href="https://g.page/hacienda-veracruz?share">click aquí</StyledExternalLink>.
      </>
    ),
  },
  {
    title: 'Queremos subir fotos de ustedes, con ustedes, del matri... ¿dónde podemos subirlas?',
    content: () => (
      <>
        En todas las redes sociales con el hashtag <StyledExternalLink href="https://www.instagram.com/explore/tags/daichepe/">#daichepe</StyledExternalLink>.
      </>
    ),
  },
  {
    title: 'No soy colombiano... ¿Qué puedo visitar en Colombia? ¿Qué puedo hacer en Villa de Leyva y sus alrededores?',
    content: () => (
      <>
        <br />
        <div 
          className="video" 
          align="center" 
        >
          <iframe
            src="https://www.youtube.com/embed/7coFG1lFOKs"
            title="Colombia"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="10"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            style={
              {
                width: "600px",
                height: "300px",
                maxWidth: '100%'
              }
            }
            allowFullScreen
          />
        </div>
        <br />
        Diciembre es temporada de vacaciones en Colombia. Se celebran con mucha ilusión las fiestas navideñas y de fin de año. 
        Sin duda hay mucho que visitar dependiendo de tu tipo de plan. Si eres más de visitar ciudades, Bogotá, Medellín y Cartagena 
        seguro te encantarán. Si lo tuyo es la naturaleza, Colombia es el segundo país más biodiverso del mundo. Lugares como Ciudad 
        Perdida, el Eje Cafetero, el Tayrona, el Desierto de la Tatacoa, la Guajira, el Amazonas o la Serranía de Chiribiquete te encantarán. En 
        cuanto a la gastronomía local, cualquier lugar al que vayas seguro te ofrecerá algo que nunca antes has probado. Si 
        prefieres opciones más gourmet, en las ciudades principales encontrarás una gran oferta gastronómica. No olvides 
        probar el ajiaco santafereño, la arepa boyacense, la bandeja paisa, el mute santandereano o el arroz con coco. Si estás en 
        Villa de Leyva más de dos días, te recomendamos visitar la plaza mayor y caminar por el pueblo, ir a los pozos azules y 
        las cascadas de la periquera y preguntar por las actividades en motos para conocer sus alrededores. La región de Boyacá, 
        donde será el matrimonio, es bastante conocida por las iluminaciones navideñas de sus pueblos, además de sus paisajes, 
        por lo que esta también sería una gran opción para conocer. A continuación algunos enlaces que te serán de utilidad:
          <ul>
            <li>
              <StyledExternalLink href="https://colombia.travel/es">
                Colombia.travel
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.parquesnacionales.gov.co/portal/es/">
                Parques Naturales de Colombia
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.colombiaoculta.org/Home">
                Colombia Oculta
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.gadventures.com/destinations/south-america/colombia/">
                G Adventures
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.tripadvisor.es/Restaurants-g294073-Colombia.html">
                Restaurantes en Colombia
              </StyledExternalLink>
            </li>
            <li>
              <StyledExternalLink href="https://www.soho.co/entretenimiento/articulo/ranking-de-los-29-mejores-restaurantes-de-bogota-para-soho/1623">
                Mejores restaurantes de Bogotá
              </StyledExternalLink>
            </li>
          </ul>
        <Colombia />
      </>
    ),
  }
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Preguntas Frecuentes</h1>
      <div style={{ marginBottom: -120 }}>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Faq;
