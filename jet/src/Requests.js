import axios from 'axios';

export class Requests {
  constructor() {
    this.home = 'https://rocky-garden-13510.herokuapp.com';
  }

  async getCategories() {
    return await axios.get(this.home + '/types');
  }

  async getVideos() {
    return await axios.get(this.home + '/videos');
  }

  getUrl(hash) {
    return this.home + hash;
  }
}