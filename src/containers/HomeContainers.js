import {
  connect
} from '../libraries/libraries';
import {
  fetchHotSeries,
  fetchLatesRelease
} from '../services/action';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  listHotSeries: state.listHotSeries,
  listLatestRelease: state.listLatesRelease
})

const mapDispatchToProps = {
  fetchHotSeries,
  fetchLatesRelease
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);