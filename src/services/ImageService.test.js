import ImageService from './ImageService';

const imageService = new ImageService();

describe('IMAGE SERVICE TESTS', () => {

  test('getImages should work', async () => {
    const images = await imageService.getImages();
    expect(images.data.length > 0).toBe(true);
  });

});
