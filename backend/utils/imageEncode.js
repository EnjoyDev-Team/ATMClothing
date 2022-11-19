const fs = require('fs');

module.exports = (products, root = '') => {
    const base64_encode = (path) => {
        const ext = path.substring(path.lastIndexOf('.')).split('.')[1];
        const base64 = fs.readFileSync(`${root}${path}`, 'base64');

        return { ext, base64 };
    };

    const newproducts = products.map((el) => {
        
        if (el.img) {
            const { ext, base64 } = base64_encode(el.img);
            el.img = `data:${ext};base64,${base64}`;
        }
        
        if (el.other_img)
            el.other_img = el.other_img.map((other_img_path) => {
                const { ext, base64 } = base64_encode(other_img_path);
                return `data:${ext};base64,${base64}`;
            });

        return el;
    });

    return newproducts;
};
