import React from 'react';
import {Button, Input, Label} from 'reactstrap';

export default function ModalForm({submit, reject, submitText='Добавить', values}) {
  return(
    <div className='add_video_wrapper'>
      <form onSubmit={submit} className='add_video'>
        <Label for='video_title' >Название Видео</Label>
        <Input id='video_title' defaultValue={values && values.title} name='video_title'/>
        <Label for='video_link' >Ссылка на Ютуб</Label>
        <Input id='video_link' defaultValue={values && values.link} name='video_link'/>
        <Label for='video_img' >Ссылка на Изображение</Label>
        <Input id='video_img' defaultValue={values && values.img} name='video_img'/>
        <br/>
        <Button type='submit'>{submitText}</Button>
        <Button type='button' onClick={reject}>Отменить</Button>
      </form>
    </div>
  )
}