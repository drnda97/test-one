import axios from 'axios';

const BASE_URL = 'https://api.github.com/gists/public'

export default class GistsAdministration {
    static async getAllGists(pageNum) {
		const res = await axios.get(`${BASE_URL}?page=${pageNum}`)
		return res.data;
	}
}