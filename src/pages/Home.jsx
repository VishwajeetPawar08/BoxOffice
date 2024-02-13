import { Link } from 'react-router-dom';
// import Starred from './Starred';

const Home = () => {
  return (
    <div>
        <h3>Home Page</h3>
        <Link to="/Starred">Go to starred Page</Link>
    </div>);
};

export default Home;
