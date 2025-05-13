import axios from "axios";

async function searchImages(term) {
    const url = "https://api.unsplash.com/search/photos";
    const response = await axios.get(url,{
        params:{
            query: term,
            client_id: "gviJkL3GbVqNqsl6bWUFB29VtEmucnrTLKV242dtzV0"
        }
    });

    console.log(response.data);
    return response.data.results;
}

export default searchImages;