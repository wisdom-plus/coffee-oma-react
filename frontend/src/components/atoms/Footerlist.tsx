import { FC } from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export type Props = {
  id: number;
  content: string;
  url: string;
};

const FooterList: FC<{ links: Props[] }> = ({ links }) => (
  <List inverted link>
    {links.map((link) => (
      <Link key={link.id} to={link.url} className="ui item">
        {link.content}
      </Link>
    ))}
  </List>
);

export default FooterList;
