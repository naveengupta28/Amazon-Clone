import axios from  "axios";

const instance=axios.create({
    baseURL:'http://localhost:5001/clone-a50bb/us-central1/api'//API {cloud url}
})

export default instance;