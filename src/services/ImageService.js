class ImageService {
  constructor() {
    this.baseUrl = 'https://www.rijksmuseum.nl/api/nl/';
  }

  async getImages(params) {
    try {
      const response = await fetch(`${this.baseUrl}collection?key=${process.env.REACT_APP_API_KEY}&${new URLSearchParams(params)}`);

      if (!response) throw new Error('Images could not loaded!');

      const data = await response.json();

      return {
        success: true,
        data: data.artObjects
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

}

export default ImageService;