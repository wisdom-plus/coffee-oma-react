import { FC } from 'react';
import Loader from 'react-loader-spinner';

const LoaderGrid: FC = () => (
  <div
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    }}
  >
    <Loader type="Watch" color="#00BFFF" height={200} width={200} />
  </div>
);

export default LoaderGrid;
