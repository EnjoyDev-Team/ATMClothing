const fs = require('fs');

module.exports = (image) => {
    const ext = (image.split(';')[0].split('/')[1]) ? image.split(';')[0].split('/')[1].replace('jpeg', 'jpg')
                                                    : image.split(';')[0].split(':')[1].replace('jpeg', 'jpg')
    const base64Data = image.split(';')[1].replace('base64,', '');

    return { ext, base64Data };
};