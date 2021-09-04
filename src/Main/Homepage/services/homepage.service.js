import { environments } from "../../../Environments/environments";
import { md5Hash, ts } from "../../../Environments/environments";

export class MarvelCommunicator {
  static async fetchAll__Characters() {
    const response = await fetch(
      `${environments.ENDPOINTS.allCharacters__url}?ts=${ts}&apikey=${environments.API_KEY__PUBLIC}&hash=${md5Hash}`
    );
    const allCharacters = await response.json();
    return allCharacters;
  }
}
