import Home from '../pages/Home';
import AnimeList from '../pages/AnimeList';

const appRoutes = [
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/"
  },
  {
    name: "Anime List",
    component: AnimeList,
    exact: true,
    path: "/anime-list"
  }

]

export default appRoutes;
