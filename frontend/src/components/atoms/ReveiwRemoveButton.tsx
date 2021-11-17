import { FC } from 'react';
import { Button } from 'semantic-ui-react';

const ReveiwRemoveButton: FC<{ UserId: number }> = ({ UserId }) => (
  <Button negative> レビューを削除する</Button>
);

export default ReveiwRemoveButton;
