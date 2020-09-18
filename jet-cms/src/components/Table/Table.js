import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


const TableVideos = ({data, openTable, deleteItem}) => {
  return (
    <Row>
      <Col>
        <Card className="mb-3">
          <CardHeader>{'Видео'}</CardHeader>
          <CardBody>
            <Row>
              <Col>
                <Card body>
                  <Table {...{ ['hover']: true }}>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Название Видео</th>
                        <th>Ссылка на Ютуб (iframe)</th>
                        <th>Ссылка на Изображение</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => {
                        return(
                        <tr key={item._id}>
                          <th onClick={e => openTable(item._id, {title: item.title, link: item.link, img: item.img})} scope="row">{index+1}</th>
                          <td onClick={e => openTable(item._id, {title: item.title, link: item.link, img: item.img})}>{item.title}</td>
                          <td onClick={e => openTable(item._id, {title: item.title, link: item.link, img: item.img})}>{item.link}</td>
                          <td onClick={e => openTable(item._id, {title: item.title, link: item.link, img: item.img})}>{item.img}</td>
                          <td onClick={e => deleteItem(item._id)}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg></td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default TableVideos;
