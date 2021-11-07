import axios from 'axios';

const BASE_URL = process.env.VUE_APP_EXP_BASE_URL;

export default class GistsAdministration {
    static async getAllGists(pageNum) {
		const res = await axios.get(`${BASE_URL}?page=${pageNum}`)
		return res.data;
	}
}