// Mock API Service for Products
export const productAPI = {
  getAllProducts: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
      {
        id: 1,
        name: 'Classic Black Shades',
        price: 89.99,
        image: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Timeless black sunglasses with UV protection',
        details: 'Premium UV protection, durable frame, comfortable fit for all-day wear',
        rating: 4.5
      },
      {
        id: 2,
        name: 'Summer Blue',
        price: 79.99,
        image: 'https://images.pexels.com/photos/3962668/pexels-photo-3962668.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Cool blue tinted lenses for summer vibes',
        details: 'Blue gradient lenses, lightweight design, perfect for beach days',
        rating: 4.8
      },
      {
        id: 3,
        name: 'Mirror Gold',
        price: 99.99,
        image: 'https://images.pexels.com/photos/2395127/pexels-photo-2395127.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Stylish gold mirrored sunglasses',
        details: 'Mirror coating, gold-plated frame, trendy style statement',
        rating: 4.6
      },
      {
        id: 4,
        name: 'Rose Pink',
        price: 84.99,
        image: 'https://images.pexels.com/photos/3962665/pexels-photo-3962665.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Trendy rose gold frame with pink lenses',
        details: 'Rose gold metal frame, pink tinted lenses, Instagram-worthy design',
        rating: 4.7
      },
      {
        id: 5,
        name: 'Aviator Pro',
        price: 109.99,
        image: 'https://images.pexels.com/photos/3962666/pexels-photo-3962666.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium aviator style sunglasses',
        details: 'Classic aviator shape, polarized lenses, premium quality',
        rating: 4.9
      },
      {
        id: 6,
        name: 'Gradient Brown',
        price: 74.99,
        image: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Brown gradient lenses for classic look',
        details: 'Gradient brown lenses, timeless appeal, versatile design',
        rating: 4.4
      },
      {
        id: 7,
        name: 'Neon Green',
        price: 94.99,
        image: 'https://images.pexels.com/photos/3962667/pexels-photo-3962667.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Bold neon green tinted lenses for statement look',
        details: 'Vibrant green lenses, trendy frame design, perfect for festivals',
        rating: 4.3
      },
      {
        id: 8,
        name: 'Silver Chrome',
        price: 114.99,
        image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Sleek silver chrome sunglasses with mirror finish',
        details: 'Chrome plated metal frame, mirror reflective lenses, modern design',
        rating: 4.7
      },
      {
        id: 9,
        name: 'Vintage Round',
        price: 79.99,
        image: 'https://images.pexels.com/photos/3938024/pexels-photo-3938024.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Retro vintage round frame sunglasses',
        details: 'Classic round shape, brown-tinted lenses, timeless style',
        rating: 4.6
      },
      {
        id: 10,
        name: 'Ocean Blue Polarized',
        price: 119.99,
        image: 'https://images.pexels.com/photos/3962669/pexels-photo-3962669.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Premium polarized ocean blue lenses',
        details: 'Polarized technology reduces glare, ocean blue tint, premium comfort',
        rating: 4.9
      },
      {
        id: 11,
        name: 'Sunset Orange',
        price: 84.99,
        image: 'https://images.pexels.com/photos/3962670/pexels-photo-3962670.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Warm sunset orange tinted lenses',
        details: 'Warm color tone, UV protection, great for warm weather',
        rating: 4.5
      },
      {
        id: 12,
        name: 'Pro Athlete Black',
        price: 129.99,
        image: 'https://images.pexels.com/photos/3938025/pexels-photo-3938025.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Professional sports sunglasses for athletes',
        details: 'Lightweight, anti-slip frame, impact-resistant lenses, performance design',
        rating: 4.8
      }
    ];
  }
};
