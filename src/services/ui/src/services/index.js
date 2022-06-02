const UserService = require("../services/user.service");
const BookService = require("../services/book.service");

const Services = {};

Services.UserService = UserService.default;
Services.BookService = BookService.default;

export default Services;
