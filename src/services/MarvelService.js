class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=794a01d68c3a008291eb1c2655e14f69";

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status${res.status}`);
    }

    return await res.json();
  };

  getAllCharahters = () => {
    return this.getResource(
      `${this._apiBase}characters?limit=9&offset=147&${this._apiKey}`
    );
  };

  getCharahter = (id) => {
    return this.getResource(
      `${this._apiBase}characters/${id}?limit=9&offset=147&${this._apiKey}`
    );
  };
}

export default MarvelService;
