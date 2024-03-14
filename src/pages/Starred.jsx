import { useStarredShows } from "../lib/useStarredShows";

const Starred = () => {

    const [starredShows] = useStarredShows();

    return (
        <div>
            Starred Page :  Total starred shows are {starredShows.length}
        </div>
    );
}

export default Starred;