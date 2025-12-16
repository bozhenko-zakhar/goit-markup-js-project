import axios from "axios";

const BASE_URL = "https://paw-hut.b.goit.study/api";

export async function getAnimalById(id) {
    const response = await axios.get(`${BASE_URL}/animals/${id}`);
    return response.data;
}
