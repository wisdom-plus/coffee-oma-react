import { FC, useState, useRef, useEffect } from 'react';
import { Dimmer, Image, Button } from 'semantic-ui-react';
import Noimage from 'images/noimage.jpg';

type Props = {
  file: Blob | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
};

const ProductImage: FC<Props> = ({ file, onChange }) => {
  const [src, setSrc] = useState(Noimage);
  const [state, setState] = useState({ active: false });
  const fileref = useRef<HTMLInputElement>({} as HTMLInputElement);
  const render = new FileReader();
  useEffect(() => {
    if (file !== undefined) {
      render.readAsDataURL(file);
      render.onload = () => {
        setSrc(() => render.result as string);
      };
    }
  }, [file, render]);

  return (
    <Dimmer.Dimmable
      dimmed={state.active}
      onMouseEnter={() => setState({ active: true })}
      onMouseLeave={() => setState({ active: false })}
    >
      <Image src={src} fluid />
      <Dimmer active={state.active}>
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
};

export default ProductImage;
