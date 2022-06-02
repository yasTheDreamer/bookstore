import http from "../api/axiosApi";

const port = 5000;

class UserService {
  getAll() {
    return http(port).get("/users");
  }

  get(id) {
    return http(port).get(`/users/${id}`);
  }

  post(data) {
    return http(port).post("/users", data);
  }
}

export default new UserService();
