import { FC } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import EnhancedFootercolumn from 'container/EnhancedFootercolumn';

const Footer: FC = () => (
  <Segment inverted vertical style={{ padding: '4rem 0' }}>
    <Container>
      <EnhancedFootercolumn />
    </Container>
  </Segment>
);

export default Footer;
