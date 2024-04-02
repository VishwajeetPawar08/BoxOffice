import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
// import DarkMode from './common/DarkMode';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      {/* <DarkMode /> */}
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
