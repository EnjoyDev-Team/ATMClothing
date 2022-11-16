const products = [
    {
        category: 'Thời trang nữ - Quần & Chân váy',
        slug : 'thoi-trang-nu-quan-chan-vay',
        products: [
            {
                name: 'Chân váy đen',
                price: '149.000',
                sale: '109.000',
                size: 'S',
                noteSize: 'Dưới 52kg',
                color: 'Đen',
                amount: 1,
                material: 'Vải',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Chân váy vải tuyết mưa dày dặn, có quần áo phía trong'
            },
            {
                name: 'Chân váy chữ A vắt chéo',
                price: '149.000',
                sale: '109.000',
                size: 'S',
                noteSize: 'Dưới 52kg',
                color: 'Mix',
                amount: 1,
                material: 'Jeans',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Chân váy phối 2 màu, có quần phía trong'
            },
            {
                name: 'Chân váy xòe mix màu',
                price: '149.000',
                sale: '109.000',
                size: 'S',
                noteSize: 'Dưới 50kg',
                color: 'Jeans mix',
                amount: 1,
                material: 'Jeans',
                facility: '',
                status: 'Mới',
                description: 'Phía trong có quần bảo hộ'
            },
            {
                name: 'Chân váy xẻ chéo',
                price: '149.000',
                sale: '109.000',
                size: 'L',
                noteSize: 'Dưới 65kg',
                color: 'Jeans',
                amount: 11,
                material: 'Jeans',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Chân váy vắt chéo có nút điều chỉnh kích thước'
            }, 
            {
                name: 'Chân váy jean chữ A',
                price: '149.000',
                sale: '109.000',
                size: 'S',
                noteSize: 'Dưới 50kg',
                color: 'Jeans',
                amount: 1,
                material: 'Jeans',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Chân váy được phối 2 màu đạm nhạt tạo sự khác biệt'
            },
            {
                name: 'Chân váy jean dài',
                price: '149.000',
                sale: '109.000',
                size: 'M',
                noteSize: 'Dưới 55kg',
                color: 'Jeans',
                amount: 1,
                material: 'Jeans',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Chân váy được may từ các mảnh vải khác nhau tạo nên sự đặc biệt của sản phẩm'
            }
        ]
    },
    {
        category: 'Thời trang nữ - Áo nữ',
        slug: 'thoi-trang-nu-ao-nu',
        products: [
            {
                name: 'Áo trắng xẻ lưng',
                price: '129.000',
                sale: '98.000',
                size: 'freesize',
                noteSize: 'Dưới 60kg',
                color: 'Trắng',
                amount: 1,
                material: 'Voan lụa dày',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Áo freesize rộng, vải dày dặn'
            },
            {
                name: 'Áo jean',
                price: '109.000',
                sale: '89.000',
                size: 'S',
                noteSize: 'Dưới 52kg',
                color: 'Jeans',
                amount: 1,
                material: 'Jeans',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: ''
            },
            {
                name: 'Áo blazer',
                price: '179.000',
                sale: '119.000',
                size: 'freesize',
                noteSize: 'Dưới 65kg',
                color: 'Xanh mint',
                amount: 1,
                material: '',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Áo 2 lớp dày dặn'
            },
            {
                name: 'Áo trắng trễ vai',
                price: '129.000',
                sale: '98.000',
                size: 'freesize',
                noteSize: 'Dưới 58kg',
                color: 'Trắng',
                amount: 1,
                material: 'Voan mềm mát',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Áp trễ vai có dây. dáng tay xòe'
            },
            {
                name: 'Áo sơ mi trắng',
                price: '129.000',
                sale: '89.000',
                size: 'freesize',
                noteSize: 'Dưới 60kg',
                color: 'Trắng',
                amount: 1,
                material: 'Vải thô',
                facility: 'ĐH Ngân hàng',
                status: 'Mới',
                description: 'Áo form xuông, dễ phối đồ'
            },
            {
                name: 'Áo xô Hàn',
                price: '109.000',
                sale: '85.000',
                size: 'freesize',
                noteSize: 'Dưới 52kg',
                color: 'Trắng',
                amount: 0,
                material: 'Vải xô',
                facility: 'ĐH SPKT',
                status: 'Như mới',
                description: ''
            },
            {
                name: 'Áo sơ mi trắng basic',
                price: '109.000',
                sale: '85.000',
                size: 'M',
                noteSize: 'Dưới 55kg',
                color: 'Trắng',
                amount: 0,
                material: 'thô',
                facility: 'ĐH SPKT',
                status: 'Như mới',
                description: ''
            },
            {
                name: 'Áo cổ kiểu đính ngọc',
                price: '95.000',
                sale: '85.000',
                size: 'M',
                noteSize: 'Dưới 58kg',
                color: 'Trắng sữa',
                amount: 0,
                material: 'lụa dày',
                facility: 'ĐH SPKT',
                status: 'Như mới',
                description: ''
            },
            {
                name: 'Áo giản đơn cột nơ',
                price: '99.000',
                sale: '85.000',
                size: 'S',
                noteSize: 'Dưới 55kg',
                color: 'Trắng',
                amount: 0,
                material: 'gân thô',
                facility: 'ĐH Ngân hàng',
                status: 'Như mới',
                description: ''
            },
            {
                name: 'Áo sơ mi đơn giản, phối chỉ đen',
                price: '109.000',
                sale: '85.000',
                size: 'M',
                noteSize: 'Dưới 52kg',
                color: 'Trắng',
                amount: 0,
                material: 'lụa mềm',
                facility: 'ĐH SPKT',
                status: 'Như mới',
                description: 'Áo túi hộp, vải mát, dễ phối đồ'
            },
            {
                name: 'Áo bánh bèo cột nơ ngang eo',
                price: '98.000',
                sale: '85.000',
                size: 'S',
                noteSize: 'Dưới 50kg',
                color: 'Trắng',
                amount: 0,
                material: 'lụa mỏng',
                facility: 'ĐH SPKT',
                status: 'Như mới',
                description: ''
            }
        ]
    },
    {
        category: 'Khác',
        slug: 'other',
        products: [
            {
                name: 'Áo trắng túi hộp',
                price: '109.000',
                sale: '89.000',
                size: 'freesize',
                noteSize: 'Dưới 60kg',
                color: 'Trắng',
                amount: 1,
                material: 'Voan mỏng',
                facility: '',
                status: 'Mới',
                description: 'Chân váy vải tuyết mưa dày dặn, có quần áo phía trong'
            }
        ]
    }
]