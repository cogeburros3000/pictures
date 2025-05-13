import axios from "axios";

async function searchImages(term) {
    const url = "hhtps://api.unsplash.com/search/photos";
    const response = await axios.get(url,{
        params:{
            query: term,
            client_id: "N-jdVtODqAVSDNNE2SLXSuSSftGkRv_Gi--xOeUN1WE"
        }
    });

    console.log(response.data);
    return response.data.results;
}

export default searchImages;