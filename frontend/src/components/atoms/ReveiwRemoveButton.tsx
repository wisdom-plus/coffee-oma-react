import { FC, Dispatch, SetStateAction } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

const ReveiwRemoveButton: FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onDestroy: () => Promise<void>;
}> = ({ open, setOpen, onDestroy }) => (
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

export default ReveiwRemoveButton;
