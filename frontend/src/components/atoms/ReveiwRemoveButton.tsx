import { FC, useState } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { FetchReviewDestroy } from 'apis/Review';
import { useQueryClient, useMutation } from 'react-query';

const ReveiwRemoveButton: FC<{
  ReviewId: number;
}> = ({ ReviewId }) => {
  const { id } = useParams<{ id: string }>();
  const [cookie] = useCookies(['token']);
  const history = useHistory();
  const reviewid = ReviewId.toString();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    () => FetchReviewDestroy(id, reviewid, cookie.token),
    {
      onSuccess: () => queryClient.invalidateQueries([id, 'review']),
    },
  );

  const onDestroy = async () => {
    setOpen(false);
    try {
      const response = await mutation.mutateAsync();
      if (response === 200) {
        history.push(`/product/${id}`, {
          message: 'レビューを削除しました。',
          type: 'success',
        });
      } else {
        history.push('/products', {
          message: 'エラーが発生しました。',
          type: 'error',
        });
      }
    } catch (e) {
      history.push('/products', {
        message: 'エラーが発生しました。',
        type: 'error',
      });
    }
  };

  return (
    <Modal
      size="tiny"
      closeIcon
      open={open}
      trigger={
        <Button negative compact style={{ marginTop: '1em' }}>
          レビューを削除する
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Header>レビュー削除</Modal.Header>
      <Modal.Content>
        <p>
          レビューを取り消すと元に戻すことはできません。
          <br />
          それでもよろしいですか？
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" />
          閉じる
        </Button>
        <Button color="green" onClick={() => onDestroy()}>
          <Icon name="checkmark" />
          削除する
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ReveiwRemoveButton;
