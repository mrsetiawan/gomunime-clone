import Home from '../pages/Home';
import AnimeList from '../pages/AnimeList';
import DetailMovie from '../pages/DetailMovie';

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
  },
  {
    name: "Detail Movie",
    component: DetailMovie,
    exact: true,
    path: "/detail-movie/:id"
  }

]

export default appRoutes;
