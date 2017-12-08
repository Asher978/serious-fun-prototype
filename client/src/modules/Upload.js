import superagent from 'superagent';
import sha1 from 'sha1';

class Upload {

  static getUrl (file) {
    const image = file[0]
    
    const cloudName = 'dnixq4nvb';
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload';
    
    // cloudinary API requires timestamp in milli seconds
    const timestamp = Date.now()/1000;
    const uploadPreset = 'gsolnxvn';
    
    // prepping the string for the upload
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'e-1DajckQfu24NBJcwTcAvNtlYM';
    
    //encrypting the string before sending it to API
    const signature = sha1(paramsStr); 
    const params = {
      'api_key': '862335133837131',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }
    
    var imgUrl;
    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)

    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    })

    uploadRequest.end((err, res) => {
      if (err) {
        console.log(err)
        return
      } else {
        imgUrl = res.body.secure_url
        sessionStorage.setItem('url', imgUrl);
      }
    })
    return sessionStorage.getItem('url');
  }

  
  static removeUrl () {
    sessionStorage.removeItem('url');
  }
}

export default Upload;