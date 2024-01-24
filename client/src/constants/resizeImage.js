
const resizeImage = (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set the fixed dimensions
        const newWidth = 350;
        const newHeight = 250;

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], image.name, {
            type: 'image/jpeg', // Change the type based on your requirements
          });
          resolve(resizedFile);
        }, 'image/jpeg');
      };
    };

    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(image);
  });
};

  module.exports=resizeImage