import productImg1 from "../../../public/img/Lipstick.webp"
import productImg2 from "../../../public/img/lipbalm.avif"
import productImg3 from "../../../public/img/shampoo.webp"
import productImg4 from "../../../public/img/facewash.webp"
import productImg5 from "../../../public/img/foundation.webp"
import productImg6 from "../../../public/img/sunscreen.webp"
import productImg7 from "../../../public/img/kajal.avif"
import productImg8 from "../../../public/img/blush.avif"
import productImg9 from "../../../public/img/moisturizer.webp"
import productImg10 from "../../../public/img/eyeshadowPalette.jpg"


// product Item
import VitaminCserum from "../../../public/img/productItme/vitaminCserum.webp"
import Lipstick from "../../../public/img/productItme/lipstick.webp"

export const allImg = {
    productImg1,
    productImg2,
    productImg3,
    productImg4,
    productImg5,
    productImg6,
    productImg7,
    productImg8,
    productImg9,
    productImg10,

    // product Item

    VitaminCserum,
    Lipstick
};

export const menu_list = [
    { menu_name: "lipstick", menu_image: productImg1 },
    { menu_name: "Lip Balm", menu_image: productImg2 },
    { menu_name: "Shampoo", menu_image: productImg3 },
    { menu_name: "Face Wash", menu_image: productImg4 },
    { menu_name: "Foundation", menu_image: productImg5 },
    { menu_name: "Sun Screen", menu_image: productImg6 },
    { menu_name: "Liner", menu_image: productImg7 },
    { menu_name: "Blush", menu_image: productImg8 },
    { menu_name: "Moisturizer", menu_image: productImg9 },
    { menu_name: "Eye Shadow Palette", menu_image: productImg10 },
];
export const product_list = [
    {
        _id: "1",
        product_name: "Best Vitamin C Serum ",
        product_image: VitaminCserum,
        product_price: 478.00 ,
        product_description:
                       "Boosts Glow | Fades Dark Spots | Fights Hyperpigmentation",
        category: "Lip Balm",
    },
    {
        _id: "2",
        product_name: "lipstick",
        product_image: Lipstick,
        product_price: 200,
        product_description:
            "A moisturizing product for soothing and protecting dry lips. Contains beeswax, shea butter, and oils with optional SPF.",
        category: "lipstick",
    },
    {
        _id: "3",
        product_name: "Shampoo",
        product_image: productImg3,
        product_price: 600,
        product_description:
            "A hair cleanser that removes dirt and oil. Available in different formulas for various hair types to maintain healthy hair.",
        category: "Shampoo",
    },
    {
        _id: "4",
        product_name: "Face Wash",
        product_image: productImg4,
        product_price: 300,
        product_description:
            "A skincare product for cleansing the face, removing impurities, and excess oil. Suitable for different skin types.",
        category: "Face Wash",
    },
    {
        _id: "5",
        product_name: "Foundation",
        product_image: productImg5,
        product_price: 800,
        product_description:
            "A product that evens skin tone and covers imperfections. Available in various forms like liquid, cream, and powder.",
        category: "Foundation",
    },
    {
        _id: "6",
        product_name: "Sunscreen",
        product_image: productImg6,
        product_price: 700,
        product_description:
            "A product that protects skin from UV rays with SPF, helping prevent sunburn, premature aging, and skin damage.",
        category: "Sun Screen",
    },
    {
        _id: "7",
        product_name: "Liner",
        product_image: productImg7,
        product_price: 250,
        product_description:
            "A dark pencil or gel used to define the eyes, known for its smudge-proof formula and traditional makeup look.",
        category: "Liner",
    },
    {
        _id: "8",
        product_name: "Blush",
        product_image: productImg8,
        product_price: 400,
        product_description:
            "A product that adds color to the cheeks, available in powder, cream, and liquid forms for a healthy flush.",
        category: "Blush",
    },
    {
        _id: "9",
        product_name: "Moisturizer",
        product_image: productImg9,
        product_price: 500,
        product_description:
            "A skincare product that hydrates and nourishes skin, available in creams, lotions, and gels for different skin types.",
        category: "Moisturizer",
    },
    {
        _id: "10",
        product_name: "Eye Shadow Palette",
        product_image: productImg10,
        product_price: 1200,
        product_description:
            "A collection of coordinated eye shadow shades for creating various eye makeup looks, with different colors and textures.",
        category: "Eye Shadow Palette",
    },
];

export const productsPage = [
    {
      id: 1,
      name: 'Hydrating Facial Serum',
      brand: 'Glow Beauty',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 128,
      category: 'Skincare',
      type: 'Serum',
      skinType: 'All',
      isNew: true,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Matte Lipstick - Ruby Red',
      brand: 'Luxe Cosmetics',
      price: 18.99,
      rating: 4.2,
      reviews: 89,
      category: 'Makeup',
      type: 'Lipstick',
      skinType: 'All',
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Detoxifying Clay Mask',
      brand: 'Pure Skin',
      price: 70,
      originalPrice: 32.00,
      rating: 4.7,
      reviews: 215,
      category: 'Skincare',
      type: 'Mask',
      skinType: 'Oily',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xheSUyMG1hc2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Volume Mascara',
      brand: 'Lash Queen',
      price: 150,
      rating: 4.3,
      reviews: 156,
      category: 'Makeup',
      type: 'Mascara',
      skinType: 'All',
      isNew: true,
      image: 'https://keautybeauty.in/cdn/shop/files/LashQueenMascaraPDP3.png?v=1743403459&width=1080'
    },
    {
      id: 5,
      name: 'Anti-Aging Night Cream',
      brand: 'Age Defy',
      price: 250,
      rating: 4.8,
      reviews: 342,
      category: 'Skincare',
      type: 'Moisturizer',
      skinType: 'Dry',
      isBestseller: true,
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2UlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Eyebrow Pencil - Medium Brown',
      brand: 'Brow Masters',
      price: 800,
      originalPrice: 16.99,
      rating: 4.1,
      reviews: 76,
      category: 'Makeup',
      type: 'Eyebrow',
      skinType: 'All',
      image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXllYnJvdyUyMHBlbmNpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
  ];