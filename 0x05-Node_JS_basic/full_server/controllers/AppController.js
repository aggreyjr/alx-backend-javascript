/**
 * Contains the miscellaneous route handlers.
 * @author Aggrey Tukashaba <https://github.com/aggreyjr>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
