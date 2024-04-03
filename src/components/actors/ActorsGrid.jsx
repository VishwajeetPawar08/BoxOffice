import { FlexGrid } from '../common/FlexGrid';
import ActorsCard from './ActorsCard';
import NotFoundImage from '../../lib/image-not-found.png'

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      <div>
        {actors.map(data => (
          <ActorsCard
            key={data.person.id}
            name={data.person.name}
            image={
              data.person.image
                ? data.person.image.medium
                : NotFoundImage
            }
            gender={data.person.gender}
            country={data.person.country ? data.person.country.name : null}
            birthday={data.person.birthday}
            deathday={data.person.deathday}
          />
        ))}
      </div>
    </FlexGrid>
  );
};

export default ActorsGrid;
