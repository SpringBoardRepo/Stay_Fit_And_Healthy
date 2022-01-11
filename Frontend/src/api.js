import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class MyfitnessApi {

    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.log(`ENDPOINT ${endpoint} , DATA=${JSON.stringify(data)}`);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${MyfitnessApi.token}` };
        const params = (method === "get") ? data : {};
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    // login "Get Token for login user"
    static async login(data) {
        const res = await this.request("auth/token", data, "post");
        return res.token;
    }

    //register a new user
    static async signup(data) {
        const res = await this.request("auth/register", data, "post");
        return res.token;
    }

    static async getCurrentUser(username) {
        const res = await this.request(`users/${username}`);
        console.log(`CURRENT USER  ${JSON.stringify(res.user)}`);
        return res.user;
    }
    static async addToFoodJournal(username, data) {
        const res = await this.request(`users/${username}/meals`, data, "post");
        return res;
    }

    static async getMeals(username) {
        const res = await this.request(`users/meals/${username}`);
        return res;
    }
}

export default MyfitnessApi;