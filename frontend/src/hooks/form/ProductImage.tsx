import {
  useState,
  useRef,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from 'react';
import Noimage from 'images/noimage.jpg';

type Return = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  src: string | undefined;
  fileref: MutableRefObject<HTMLInputElement>;
};

const useProductImage = ({ file }: { file: Blob | undefined }): Return => {
  const [src, setSrc] = useState(Noimage);
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
  useEffect(() => rendermemo, [rendermemo]);

  return { active, src, setActive, fileref };
};

export default useProductImage;
