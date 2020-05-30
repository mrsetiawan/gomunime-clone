import HomeContainer from '../containers/HomeContainers';
import AnimeList from '../pages/AnimeList';
import DetailMovie from '../pages/DetailMovie';
import PageNotFound from '../pages/PageNotFound';

const appRoutes = [
  {
    name: "Home",
    component: HomeContainer,
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
    path: "/detail-movie/:link"
  },
  {
    name: "Page Not Found",
    component:PageNotFound,
    exact:true,
    path:'*'
  }
]

export default appRoutes;
