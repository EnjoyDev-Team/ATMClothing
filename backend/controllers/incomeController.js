const catchAsync = require("../utils/catchAsync");
const productModel = require("../models/productModel");
const serviceModel = require("../models/serviceModel");
const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");

module.exports.analyst = catchAsync(async (req, res) => { 
    const date = new Date();

    const prevFirstMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    const prevLastMonth = new Date(date.getFullYear(), date.getMonth(), 0);

    const FirstMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const LastMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const prev_product = await productModel.find({
        create_at: { $gte: prevFirstMonth, $lte: prevLastMonth }
    }).count();

    const product = await productModel.find({
        create_at: { $gte: FirstMonth, $lte: LastMonth }
    }).count();

    const totalProduct = await productModel.find().count();

    const product_increase = product - prev_product <= 0 ? 0 : product - prev_product;

    const product_total_message = `${Math.round((product_increase / totalProduct) * 100)}% INCREASE`;

    const prev_order = await orderModel.find({
        status: 4,
        createAt: { $gte: prevFirstMonth, $lte: prevLastMonth }
    });

    let totalPricePrevOrder = 0;
    prev_order.forEach(order => { 
        totalPricePrevOrder += +order.totalPrice.replace(/\D/g,'');;
    });
    
    const order = await orderModel.find({
        status: 4,
        createAt: { $gte: FirstMonth, $lte: LastMonth }
    });

    let totalPriceOrder = 0;
    order.forEach(order => { 
        totalPriceOrder += +order.totalPrice.replace(/\D/g,'');;
    });
    
    const totalOrder = await orderModel.find();

    let totalPriceAllOrder = 0;
    totalOrder.forEach(order => { 
        totalPriceAllOrder += +order.totalPrice.replace(/\D/g,'');;
    });

    const order_increase = totalPriceOrder - totalPricePrevOrder <= 0 ? 0 : totalPriceOrder - totalPricePrevOrder;

    const order_total_message = `${Math.round((order_increase / totalPriceAllOrder) * 100)}% INCREASE`;

    const prev_services = await serviceModel.orderModel.find({
        service: 'sell',
        status: 'Đã hoàn thành',
        create_at: { $gte: prevFirstMonth, $lte: prevLastMonth }
    });
    
    let totalPricePrevService = 0;
    prev_services.forEach(order => { 
        totalPricePrevService += +order.totalPrice.replace(/\D/g,'');;
    });
    
    const services = await serviceModel.orderModel.find({
        service: 'sell',
        status: 'Đã hoàn thành',
        create_at: { $gte: FirstMonth, $lte: LastMonth }
    });

    let totalPriceService = 0;
    services.forEach(order => { 
        totalPriceService += +order.totalPrice.replace(/\D/g,'');;
    });

    const Totalservices = await serviceModel.orderModel.find({
        service: 'sell',
        status: 'Đã hoàn thành',
    });

    let totalPriceAllService = 0;
    Totalservices.forEach(order => { 
        totalPriceAllService += +order.totalPrice.replace(/\D/g,'');;
    });

    const total_price = totalPriceOrder - totalPriceService;
    const total_prev_price = totalPricePrevOrder - totalPricePrevService;
    const total_all_price = totalPriceAllOrder - totalPriceAllService;

    const total_price_increase = total_price - total_prev_price;

    const total_message = `${Math.round((Math.abs(total_price_increase) / Math.abs(total_all_price)) * 100)}% ${total_price_increase < 0 ? 'DECREASE' : 'INCREASE'}`;

    const prev_user = await userModel.find({
        create_at: { $gte: prevFirstMonth, $lte: prevLastMonth }
    }).count();

    const user = await userModel.find({
        create_at: { $gte: FirstMonth, $lte: LastMonth }
    }).count();

    const totaluser = await userModel.find().count();

    const user_increase = user - prev_user <= 0 ? 0 : user - prev_user;

    const user_total_message = `${Math.round((user_increase / totaluser) * 100)}% INCREASE`;

    const ress = {
        productTotal: totalProduct,
        product_total_message: product_total_message,
        importTotal: totalPriceAllOrder,
        import_total_message: order_total_message,
        priceTotal: total_all_price,
        price_total_message: total_message,
        userTotal: totaluser,
        user_total_message: user_total_message,
    }

    res.status(200).json({
        income: ress
    })

});