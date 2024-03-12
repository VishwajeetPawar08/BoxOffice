import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useEffect, useState } from 'react';

const Show = () => {
  const { showId } = useParams();

  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }

    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error : {showError.message}</div>;
  }

  if (showData) {
    return <div>Got showData: {showData.name}</div>;
  }

  return <div>Data is loading.... {showId}</div>;
};

export default Show;
