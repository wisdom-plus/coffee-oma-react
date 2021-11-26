import { FC } from 'react';
import styled from 'styled-components';
import backimage from 'images/coffee-back.jpg';
import { Header, Icon, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Backimage = styled.div`
  height: 800px;
  color: black !important;
  background-image: url(${backimage}) !important;
  background-size: cover !important;
`;

const HomeTopTitle: FC = () => (
  <Backimage className="ui inverted vertical masthead center aligned segment">
    <Container text>
      <Header
        content="coffee-oma"
        as="h1"
        style={{ minHeight: '1em', fontSize: '6em' }}
      />
      <h3>コーヒー関するすべてを</h3>
      <Button animated="fade" size="huge" primary as={Link} to="/products">
        <Button.Content visible>
          coffee-omaを始める
          <Icon name="arrow right" />
        </Button.Content>
        <Button.Content hidden>
          Let&apos;s Start
          <Icon name="coffee" />
        </Button.Content>
      </Button>
    </Container>
  </Backimage>
);

export default HomeTopTitle;
