import { formatDate } from "./lib/formatDate.js";
import { getData } from "./lib/getData.js";
import { loadHandlebars } from "./lib/loadHandlebars.js";
import { toggle } from "./lib/toggle.js";

window.onload = async () => {
  let fetchedData = await getData();
  formatDate(fetchedData);
  loadHandlebars(fetchedData);
  toggle();
};