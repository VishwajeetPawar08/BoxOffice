import { useParams } from 'react-router-dom';

const Show = () => {
  const {showId} = useParams();
  return <div>Read More {showId}</div>;
};

export default Show;
