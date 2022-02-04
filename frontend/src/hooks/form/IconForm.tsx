import {
  useState,
  useRef,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from 'react';

type Props = {
  defaultimage: string;
  file: Blob | undefined;
};
type Return = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  src: string | undefined;
  fileref: MutableRefObject<HTMLInputElement>;
};

const useIconForm = ({ defaultimage, file }: Props): Return => {
  const [src, setSrc] = useState<string>();
  const [active, setActive] = useState(false);
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

  return { src, active, setActive, fileref };
};

export default useIconForm;
