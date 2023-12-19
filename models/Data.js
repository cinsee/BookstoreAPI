import mongoose from "mongoose";

// {
//     id: "74",
//     title:
//       "วอร์เรน บัฟเฟ็ตต์ กับการตีความงบการเงิน : Warren Buffett & The interpretation of financial statements",
//     author: "แมรี่ บัฟเฟ็ตต์และเดวิด คลาร์ก",
//     publisher: "สำนักพิมพ์แสงดาว/saengdao",
//     vote: "1",
//     price: 360,
//     quantity: 1,
//     img_cover:
//       "https://storage.naiin.com/system/application/bookstore/resource/product/202207/554009/1000251663_front_XL.jpg?t=cat&imgname=%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%99-%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B9%87%E0%B8%95%E0%B8%95%E0%B9%8C-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%87%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99-:-Warren-Buffett---The-interpretation-of-financial-statements-",
//   }

const dataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  vote: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  img_cover: {
    type: String,
  },
});

export default mongoose.model("Data", dataSchema);
