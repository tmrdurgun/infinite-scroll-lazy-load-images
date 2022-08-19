class ImageService {
  constructor() {
    this.baseUrl = 'https://www.rijksmuseum.nl/api/nl/';
  }

  async getImages(params) {
    try {
      const images = await fetch(`${this.baseUrl}collection?key=${process.env.REACT_APP_API_KEY}&${new URLSearchParams(params)}`);

      if (!images) throw new Error('Images could not loaded!');

      return {
        success: true,
        data: images.jsom()
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