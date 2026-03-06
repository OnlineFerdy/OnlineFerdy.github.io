const products = [
    // Moderns
    {
        id: 1,
        name: "Modern Rose Medley",
        category: "Moderns",
        price: 150000,
        image: "../bunga mama cropped/modern/aneka mawar modern sdkgjdsfk.jpeg",
        badge: "Pre-order"
    },
    {
        id: 2,
        name: "L'Orchidée Moderne",
        category: "Moderns",
        price: 250000,
        image: "../bunga mama cropped/modern/anggrek modern.jpeg",
        badge: "Pre-order"
    },
    {
        id: 3,
        name: "Royal Orchid Grace",
        category: "Moderns",
        price: 280000,
        image: "../bunga mama cropped/modern/anggrek modern2.jpeg",
        badge: "Pre-order"
    },
    {
        id: 4,
        name: "Ethereal White Orchid",
        category: "Moderns",
        price: 300000,
        image: "../bunga mama cropped/modern/anggrek modern3.jpeg",
        badge: "Pre-order"
    },
    {
        id: 5,
        name: "Pure White Orchid",
        category: "Moderns",
        price: 180000,
        image: "../bunga mama cropped/modern/anggrek putih modern sdfkasjf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 6,
        name: "Maroon Orchid Allure",
        category: "Moderns",
        price: 220000,
        image: "../bunga mama cropped/modern/bunga anggrek modern maroon.jpeg",
        badge: "Pre-order"
    },
    {
        id: 7,
        name: "Contemporary Table Bloom",
        category: "Moderns",
        price: 135000,
        image: "../bunga mama cropped/modern/bunga meja modern askdgjsakfj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 8,
        name: "Jasmine & Rose Corner",
        category: "Moderns",
        price: 190000,
        image: "../bunga mama cropped/modern/bunga melati dan mawar sudut skdfjakgj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 9,
        name: "Corner Rose Elegance",
        category: "Moderns",
        price: 210000,
        image: "../bunga mama cropped/modern/mawar modern sudut ksdfjsdkfj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 10,
        name: "Modern Rose Essence",
        category: "Moderns",
        price: 165000,
        image: "../bunga mama cropped/modern/mawar modern.jpeg",
        badge: "Pre-order"
    },
    {
        id: 11,
        name: "Violet Rose Mystique",
        category: "Moderns",
        price: 145000,
        image: "../bunga mama cropped/modern/mawar ungu modern sadf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 12,
        name: "Rose Souvenir Charm",
        category: "Moderns",
        price: 85000,
        image: "../bunga mama cropped/modern/mawar untuk souvenir.jpeg",
        badge: "Pre-order"
    },
    {
        id: 13,
        name: "Modern Jasmine Scent",
        category: "Moderns",
        price: 125000,
        image: "../bunga mama cropped/modern/melati modern.jpeg",
        badge: "Pre-order"
    },
    {
        id: 14,
        name: "Nest of Blooms",
        category: "Moderns",
        price: 350000,
        image: "../bunga mama cropped/modern/sarang burung.jpeg",
        badge: "Pre-order"
    },
    {
        id: 15,
        name: "Single Rose Elegance",
        category: "Moderns",
        price: 50000,
        image: "../bunga mama cropped/modern/setangkai bunga mawar.jpeg",
        badge: "Pre-order"
    },
    {
        id: 16,
        name: "Modern Lotus Serenity",
        category: "Moderns",
        price: 175000,
        image: "../bunga mama cropped/modern/teratai modern.jpeg",
        badge: "Pre-order"
    },
    {
        id: 17,
        name: "Mystic Floral Touch",
        category: "Moderns",
        price: 160000,
        image: "../bunga mama cropped/modern/unnamedgasdfasfd.jpg",
        badge: "Pre-order"
    },

    // Traditionals
    {
        id: 18,
        name: "Traditional Basket Bloom",
        category: "Traditionals",
        price: 200000,
        image: "../bunga mama cropped/traditional/basket flower.jpeg",
        badge: "Pre-order"
    },
    {
        id: 19,
        name: "Jasmine Basket Heritage",
        category: "Traditionals",
        price: 180000,
        image: "../bunga mama cropped/traditional/keranjang melati ghfgdsfg.jpeg",
        badge: "Pre-order"
    },
    {
        id: 20,
        name: "Maroon Jasmine Fusion",
        category: "Traditionals",
        price: 195000,
        image: "../bunga mama cropped/traditional/melati dan maroon.jpeg",
        badge: "Pre-order"
    },
    {
        id: 21,
        name: "Classic Jasmine Weave",
        category: "Traditionals",
        price: 150000,
        image: "../bunga mama cropped/traditional/melati tradisional.jpeg",
        badge: "Pre-order"
    },
    {
        id: 22,
        name: "Royal Jasmine Tradition",
        category: "Traditionals",
        price: 220000,
        image: "../bunga mama cropped/traditional/melati tradisional2.jpeg",
        badge: "Pre-order"
    },
    {
        id: 23,
        name: "Lotus Souvenir Classic",
        category: "Traditionals",
        price: 95000,
        image: "../bunga mama cropped/traditional/teratai tradisional untuk souvenir.jpeg",
        badge: "Pre-order"
    },

    // Crafts
    {
        id: 24,
        name: "Floral Doll Artisan",
        category: "Crafts",
        price: 120000,
        image: "../bunga mama cropped/crafts/boneka aghsdkfjasf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 25,
        name: "Bunny Bloom Craft",
        category: "Crafts",
        price: 130000,
        image: "../bunga mama cropped/crafts/boneka kelinci kecil asdfsafj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 26,
        name: "Rose Brooch Delicate",
        category: "Crafts",
        price: 45000,
        image: "../bunga mama cropped/crafts/bros mawar sdfkjgsfd.jpeg",
        badge: "Pre-order"
    },
    {
        id: 27,
        name: "Assorted Floral Brooches",
        category: "Crafts",
        price: 40000,
        image: "../bunga mama cropped/crafts/macam2 bros.jpeg",
        badge: "Pre-order"
    },
    {
        id: 28,
        name: "Floral Tissue Box",
        category: "Crafts",
        price: 85000,
        image: "../bunga mama cropped/crafts/tempat tissue sadfkjsdkafj.jpeg",
        badge: "Pre-order"
    },

    // Customs
    {
        id: 29,
        name: "Custom Rose Basket",
        category: "Customs",
        price: 250000,
        image: "../bunga mama cropped/custom/bunga mawar keranjang.jpeg",
        badge: "Pre-order"
    },
    {
        id: 30,
        name: "Bespoke Floral Arrangement",
        category: "Customs",
        price: 300000,
        image: "../bunga mama cropped/custom/sadfsagfsadfsaf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 31,
        name: "Grand Standing Flower",
        category: "Customs",
        price: 500000,
        image: "../bunga mama cropped/custom/standing flower sadfkjgasf.jpeg",
        badge: "Pre-order"
    },

    // Bouquets
    {
        id: 32,
        name: "Traditional Bouquet Charm",
        category: "Bouquets",
        price: 180000,
        image: "../bunga mama cropped/bouquet/bouquet bunga tradisional agskdjf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 33,
        name: "Crimson Rose Bouquet",
        category: "Bouquets",
        price: 220000,
        image: "../bunga mama cropped/bouquet/bouquet mawar merah askgjaskfj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 34,
        name: "Modern Rose Bouquet",
        category: "Bouquets",
        price: 240000,
        image: "../bunga mama cropped/bouquet/bouquet mawar modern asdfasdf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 35,
        name: "Soft Pink & White Roses",
        category: "Bouquets",
        price: 230000,
        image: "../bunga mama cropped/bouquet/bouquet mawar soft pink dan white sadkfjksdagj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 36,
        name: "Pure White Bouquet",
        category: "Bouquets",
        price: 210000,
        image: "../bunga mama cropped/bouquet/bouquet putih asdfkjsgdkjkf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 37,
        name: "Elegant Mixed Bouquet",
        category: "Bouquets",
        price: 260000,
        image: "../bunga mama cropped/bouquet/bouquet sdfkjskgjsdkf.jpeg",
        badge: "Pre-order"
    },
    {
        id: 38,
        name: "Single Red Rose Gift",
        category: "Bouquets",
        price: 60000,
        image: "../bunga mama cropped/bouquet/bouquet setangkai mawar merah.jpeg",
        badge: "Pre-order"
    },
    {
        id: 39,
        name: "Graduation Glory Bouquet",
        category: "Bouquets",
        price: 190000,
        image: "../bunga mama cropped/bouquet/bouquet wisuda aksdjgfsakdfj.jpeg",
        badge: "Pre-order"
    },
    {
        id: 40,
        name: "Prosperity Money Bouquet",
        category: "Bouquets",
        price: 1150000, // Assuming 10x100k + fee
        image: "../bunga mama cropped/bouquet/buket uang 10 lembar 100 ribu.jpeg",
        badge: "Pre-order"
    }
];
