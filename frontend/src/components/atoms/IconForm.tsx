import { FC, useState, useRef, useEffect, useMemo } from 'react';
import { Dimmer, Image, Button } from 'semantic-ui-react';
import Default from 'images/default.png';

type Props = {
  defaultimage: string;
  file: Blob | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
};

const IconForm: FC<Props> = ({ defaultimage = Default, file, onChange }) => {
  const [src, setSrc] = useState<string>();
  const [state, setState] = useState({ active: false });
  const fileref = useRef<HTMLInputElement>({} as HTMLInputElement);
  const rendermemo = useMemo(() => {
    const render = new FileReader();
    if (file !== undefined) {
      render.readAsDataURL(file);
      render.onload = () => {
        setSrc(() => render.result as string);
      };
    }
  }, [file]);
  useEffect(() => setSrc(() => defaultimage), [rendermemo, defaultimage]);

  return (
    <Dimmer.Dimmable
      dimmed={state.active}
      onMouseEnter={() => setState({ active: true })}
      onMouseLeave={() => setState({ active: false })}
    >
      <Image src={src} circular size="medium" centered />
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

export default IconForm;
