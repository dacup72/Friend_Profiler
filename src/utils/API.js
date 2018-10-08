import axios from 'axios';

export default {
  findAll: function () {
    return axios.get('https://s3-us-west-2.amazonaws.com/fishcharliepublicbucket/DylanCodingActivity1.json')
  }
}

