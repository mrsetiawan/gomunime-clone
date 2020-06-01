import {
  connect
} from '../libraries/libraries';
import { fetchHotSeries } from '../services/action';
import CardRecommendedSeries from '../components/CardRecommendedSeries';

const mapStateToProps = (state) => ({
  listHotSeries: state.listHotSeries
})

const mapDispatchToProps = {
  fetchHotSeries
}

export default connect(mapStateToProps, mapDispatchToProps)(CardRecommendedSeries);