import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length === 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return (
        <div>Error Occurred : {starredShowsError.message}</div>
    )
  }

  return (
    <div>Starred Shows Loading...</div>
  );
};

export default Starred;
