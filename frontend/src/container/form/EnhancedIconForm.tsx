import { FC } from 'react';
import Default from 'images/default.png';
import IconForm from 'components/atoms/IconForm';
import useIconForm from 'hooks/form/IconForm';
/* eslint-disable react/jsx-props-no-spreading */

type Props = {
  defaultimage: string;
  file: Blob | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
};

const EnhancedIconForm: FC<Props> = ({
  defaultimage = Default,
  file,
  onChange,
}) => {
  const methods = useIconForm({ defaultimage, file });

  return <IconForm onChange={onChange} {...methods} />;
};

export default EnhancedIconForm;
