import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Divider, Input, Row, Table } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';
import { searchUniversity } from './redux/actions/index';
import Loading from './components/loading/Loading'
const { Search } = Input;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const universities = useSelector(state => state);
  const dispatch = useDispatch();


  const columns = [
    {
      title: 'University Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Domains',
      dataIndex: 'domains',
      key: 'domains',
    },
    {
      title: 'Website',
      dataIndex: 'web_pages',
      key: 'web_pages',
      render: (value) =>
        <a style={{ color: 'blue' }}
          href={`${value}`}
          target={'_blank'}
          rel="noopener noreferrer" >
          University website
        </a >,
    },
  ];

  const search=(e)=>{
    setSearchValue(e.target.value)
  }
  const getUniversities=()=>{
    dispatch(searchUniversity(searchValue))
  }
  return (

    <div className="App">
      <Divider style={{ fontSize: '24px' }} orientation="center">Search University By Name</Divider>
      <Row>
        <Col span={12} offset={6}>
          <Search placeholder="Search University ..." enterButton="Search" size="large" loading={universities.loading}
            value={searchValue}
            onChange={(e) => search(e)}
            onSearch={getUniversities}
          />
        </Col>
      </Row>
      <br /><br />
      {universities.loading
        ?
        <Row>
          <Col span={18} offset={3}>
            <Loading />
          </Col>
        </Row>
        :
        <Row>
          <Col span={18} offset={3}>
            <Table columns={columns} dataSource={universities.data} rowKey='name' />
          </Col>
        </Row>
      }

    </div >
  );
}

export default App;
