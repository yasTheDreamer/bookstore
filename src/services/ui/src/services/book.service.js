import http from "../api/axiosApi";

const port = 8081;

class BookService {
  getAll() {
    return http(port).get("/books");
  }

  get(id) {
    return http(port).get(`/books/${id}`);
  }

  post(data) {
    return http(port).post("/books", data);
  }
}

export default new BookService();
