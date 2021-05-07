import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import RegistrationNew from 'components/templates/RegistrationNew';
import RegistrationShow from 'components/templates/RegistrationShow';
import RegistrationEdit from 'components/templates/RegistrationEdit';

type Props = {
  isnew?: boolean;
  isedit?: boolean;
  isshow?: boolean;
};

const Registration: FC<Props> = ({ isnew, isedit, isshow }) => (
  <>
    <Helmet title="Registration" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      {isnew && <RegistrationNew />}
      {isedit && <RegistrationEdit />}
      {isshow && <RegistrationShow />}
    </Grid>
  </>
);

export default Registration;
