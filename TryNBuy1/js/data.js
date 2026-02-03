const products = [
    {
        id: 1,
        name: "Sony WH-1000XM4 Noise Canceling Headphones",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Rahul Sharma",
        location: "Koramangala, Bangalore",
        age: "6 months old",
        description: "Barely used Sony headphones. Amazing noise cancellation. Want to upgrade to XM5, so selling these. You can try them out for sound quality.",
        phone: "+919876543210"
    },
    {
        id: 2,
        name: "Apple MacBook Air M1",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Priya Patel",
        location: "Indiranagar, Bangalore",
        age: "1 year old",
        description: "Space Grey MacBook Air M1. Perfect condition, battery health 92%. Moving to Windows for work compatibility. Come check it out.",
        phone: "+919988776655"
    },
    {
        id: 3,
        name: "Canon EOS 1500D DSLR Camera",
        category: "Cameras",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Amit Singh",
        location: "HSR Layout, Bangalore",
        age: "2 years old",
        description: "Great entry-level DSLR. Comes with kit lens and a bag. I don't use it much anymore. Inspect the lens and body before buying.",
        phone: "+919123456789"
    },
    {
        id: 4,
        name: "PlayStation 5 Console",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Vikram Reddy",
        location: "Whitefield, Bangalore",
        age: "3 months old",
        description: "Got it as a gift but not a gamer. Played a few times. It's basically new. You can come and play a game to test it.",
        phone: "+919000011111"
    },
    {
        id: 5,
        name: "Decathlon Rockrider ST100 Cycle",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Sneha Gupta",
        location: "Jayanagar, Bangalore",
        age: "1.5 years old",
        description: "Good condition mountain bike. Recently serviced. Tyres are in good shape. Test ride available.",
        phone: "+919555544444"
    },
    {
        id: 6,
        name: "IKEA Poang Armchair",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Arjun Das",
        location: "Malleshwaram, Bangalore",
        age: "4 years old",
        description: "Super comfortable chair. Cushion cover is slightly faded but washable. Frame is sturdy. Sit and check comfort.",
        phone: "+919222233333"
    },
    {
        id: 7,
        name: "Atomic Habits by James Clear",
        category: "Books",
        image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Sneha Reddy",
        location: "Koramangala, Bangalore",
        age: "1 month old",
        description: "Read once, like new. Life-changing book. Hardcover edition.",
        phone: "+919876598765"
    },
    {
        id: 8,
        name: "Yamaha F310 Acoustic Guitar",
        category: "Musical Instruments",
        image: "https://images.unsplash.com/photo-1525201548942-d8732f661adc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Rohan Mehta",
        location: "Indiranagar, Bangalore",
        age: "2 years old",
        description: "Great for beginners. Comes with a capo and bag. Strings replaced recently.",
        phone: "+919988776655"
    },
    {
        id: 9,
        name: "Nintendo Switch OLED",
        category: "Gaming Consoles",
        image: "https://images.unsplash.com/photo-1648487773229-216e5372338b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Vikram Singh",
        location: "Whitefield, Bangalore",
        age: "6 months old",
        description: "Pristine condition. White Joy-Cons. Includes Mario Kart 8.",
        phone: "+919123412345"
    },
    {
        id: 10,
        name: "GoPro Hero 10 Black",
        category: "Cameras",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Anjali Rao",
        location: "Jayanagar, Bangalore",
        age: "1 year old",
        description: "Perfect for vlogging and travel. 5.3K video. Comes with extra battery and mount.",
        phone: "+919000099999"
    },
    {
        id: 11,
        name: "Kindle Paperwhite (11th Gen)",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1594980596853-75cfbe3c7a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Karthik Nair",
        location: "Malleshwaram, Bangalore",
        age: "3 months old",
        description: "Waterproof, adjustable warm light. 8GB. Forgot to use it, prefer physical books.",
        phone: "+919555566666"
    },
    {
        id: 12,
        name: "Wooden Study Table & Chair",
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        owner: "Meera Iyer",
        location: "HSR Layout, Bangalore",
        age: "2 years old",
        description: "Solid wood table with ergonomic chair. Moving out sale. Pick up only.",
        phone: "+919222288888"
    }
];

// In a real app, we would fetch this. For now, we expose it globally or via module if using type=module.
// We'll attach it to the window to keep it simple without modules for now, or just logic in main.
window.products = products;
