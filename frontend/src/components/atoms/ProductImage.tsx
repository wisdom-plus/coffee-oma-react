import { FC, Dispatch, SetStateAction, MutableRefObject } from 'react';
import { Dimmer, Image, Button } from 'semantic-ui-react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  src: string | undefined;
  fileref: MutableRefObject<HTMLInputElement>;
};

const ProductImage: FC<Props> = ({
  src,
  onChange,
  active,
  setActive,
  fileref,
}) => (
  <Dimmer.Dimmable
    dimmed={active}
    onMouseEnter={() => setActive(true)}
    onMouseLeave={() => setActive(false)}
  >
    <Image src={src} fluid />
    <Dimmer active={active}>
      <Button
        color="teal"
        content="画像を追加する"
        htmlFor="file"
        type="button"
        onClick={() => fileref.current.click()}
      />
      <input
        type="file"
        id="file"
        hidden
        accept="image/*"
        ref={fileref}
        onChange={onChange}
      />
    </Dimmer>
  </Dimmer.Dimmable>
);

export default ProductImage;
