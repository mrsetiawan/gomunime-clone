import {
  React,
  Row,
  Card,
  Form,
  Input,
  Radio
} from '../libraries/libraries.js';
import CardTitle from './CardTitle';
import ButtonAction from './ButtonAction';

const SearchAnime = () => {
  return (
    <Row>
      <CardTitle title='Anime List'>
        <Card.Grid hoverable={false} style={{ width: '100%', background: 'rgba(34,58,101,.05)', border: 0 }}>
          <Form layout='vertical'>
            <Form.Item label="Title">
              <Input size="large"/>
            </Form.Item>
            <Form.Item name="status" label="Status">
              <Radio.Group className='form-group-costum'>
                <Radio value="all">All</Radio>
                <Radio value="ongoing">OnGoing</Radio>
                <Radio value="completed">Completed</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="type" label="Type">
              <Radio.Group className='form-group-costum'>
                <Radio value="all">All</Radio>
                <Radio value="ongoing">Tv Series</Radio>
                <Radio value="movie">Movie</Radio>
                <Radio value="special">Special</Radio>
                <Radio value="ova">OVA</Radio>
                <Radio value="ona">ONA</Radio>
                <Radio value="music">Music</Radio>  
              </Radio.Group>
            </Form.Item>
            <ButtonAction type="primary" shape="round" size='medium' float='pull-right'>
              Search
            </ButtonAction>
          </Form>
        </Card.Grid>
      </CardTitle>
    </Row>
  )
}

export default SearchAnime;