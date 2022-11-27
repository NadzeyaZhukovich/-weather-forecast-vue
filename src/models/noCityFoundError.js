export default class NoCityFoundError extends Error {
  constructor() {
    super("City Not Found");
    this.name = "NoCityFoundError";
  }
}