import React, {useEffect, useState} from 'react';
import Table from 'components/Table/Table';
import axios from 'axios';
import Page from 'components/Page';
import Modal from './components/ModalForm';
import {Button} from 'reactstrap';
import './videos.scss';

let videoId;
export default function Videos() {
  const [data, setData] = useState([]);
  const [addVideo, setAddVideo] = useState(false)
  const [editVideo, setEditVideo] = useState({state: false})

  useEffect(() => {
    ( async ()=>{
      const videos = await axios.get('http://localhost:3000/api/videos');
      setData(() => videos.data.data);
    })();
  }, [addVideo, editVideo]);

  function addNewVideo(e) {
    e.preventDefault();
    const [title, link, img] = [e.target.video_title.value, e.target.video_link.value, e.target.video_img.value];
    axios.post('http://localhost:3000/api/videos', {title, link, img});
    setAddVideo(false);
  }

  function updateVideo(e) {
    e.preventDefault();
    const [title, link, img] = [e.target.video_title.value, e.target.video_link.value, e.target.video_img.value];
    axios.patch(`http://localhost:3000/api/videos/${videoId}`, {title, link, img});
    setEditVideo(false);
  }

  function openTable(id, value) {
    setEditVideo({state: true, values: value});
    videoId = id;
  }

  async function deleteVideo(id) {
    console.log(id);
    await axios.delete(`http://localhost:3000/api/videos/${id}`);
    setEditVideo(false);
  }

  return(
    <div clssName='video-edit__wrapper'>
      <Page
        className="DashboardPage"
        title="Видео Реадктор"
        breadcrumbs={[{ name: 'Видео Реадктор', active: true }]}
        >
        <Table deleteItem={deleteVideo} openTable={openTable} data={data}></Table>
        <Button onClick={() => setAddVideo(true)}>Добавить Видео</Button>
        {addVideo && <Modal submit={addNewVideo} reject={() => setAddVideo(false)} />}
        {editVideo.state && <Modal submit={updateVideo} values={editVideo.values} submitText='Обновить' reject={() => setEditVideo(false)} />}
      </Page>
    </div>
  )

}