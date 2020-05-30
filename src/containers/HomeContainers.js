import {
  connect,
} from '../libraries/libraries';
import Home from '../pages/Home';

const mapStateToProps = (state) => ({
  listHotSeries: state.listHotSeries,
  listLatestRelease: state.listLatesRelease
})

export default connect(mapStateToProps, null)(Home);