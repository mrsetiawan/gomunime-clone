import {
  React,
  useEffect,
} from '../libraries/libraries';

import CardListSlider from '../components/CardListSlider';

const CardRecommendedSeries = (props) => {

  const {
    fetchHotSeries,
    listHotSeries
  } = props;

  useEffect(() => {
    if (listHotSeries.dataHotSeries.length < 1) {
      fetchHotSeries();
    }
  }, []);

  return (
    <>
      <CardListSlider
        listMovies={listHotSeries.dataHotSeries}
        title='Recomended Series'
      />
    </>
  )

}

export default CardRecommendedSeries;