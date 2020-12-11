const myApp = new Vue ({
    el: '#root',
    data: {
        links: [
           ['HOME','PAGES', 'MENU'], ['EVENT', 'BLOG', 'LANDING']
        ],
        slicer: [
            {
                bg: 'h3-rev-img-1', pic: 'h3-rev-img-2'
            },
            {
                bg: 'h3-rev-img-3', pic: 'h3-rev-img-4'
            },
            {
                bg: 'h3-rev-img-5', pic: 'h3-rev-img-6'
            }
        ],
        images: ['h3-img-1', 'h3-img-2', 'h3-img-3', 'h3-img-4'],
        dots: 3,
        team: [
            {
                name: 'Jack Skeleton', pic: 'h1-team-1a-700x700', role: 'Cook Master',
            },
            {
                name: 'Frank Bailey', pic: 'h1-team-2a', role: 'Kitchen Porter',
            },
            {
                name: 'Karen Ross', pic: 'h1-team-3a', role: 'Kitchen Porter',
            },
            {
                name: 'Jhon Jhonson', pic: 'h1-team-4a', role: 'Delivery Guy',
            }
        ],
        clients: ['h1-clients-img-4', 'h1-clients-img-3', 'h1-clients-img-1', 'h1-clients-img-2', 'h1-clients-img-5'],
        pizzas: [
            {
                name: 'BISMARCK', pic: 'h3-product-img-1a-100x100', price: '$5.00 - $30.00'
            },
            {
                name: 'FIORI DI ZUCCA', pic: 'h3-product-img-2a-150x150', price: '$7.00 - $50.00'
            },
            {
                name: 'VALDOSTANA', pic: 'h3-product-img-3a-150x150', price: '$55.00'
            },
            {
                name: 'PIZZA TARTUFATA', pic: 'h3-product-img-4a-150x150', price: '$45.00'
            },
            {
                name: 'FRANCESCANA', pic: 'h3-product-img-5a-150x150', price: '$25.00'
            },
            {
                name: 'CAMPAGNOLA', pic: 'h3-product-img-6a-100x100', price: '$50.00 - $95.00'
            }
        ],
        restaurants: [
            {
                address: '1614 E. Bell Rd #104.', country:'Salerno, AZ 85022', number: '(602) 867-1010'
            },
            {
                address: '204 E. Piazzetta Tommaso', country:'Sorrento, AZ 85022', number: '(358) 867-1010'
            },
            {
                address: 'Viale Puglia 54', country:'Torre Del Greco AZ 85022', number: '(359) 867-1010'
            },
            {
                address: 'Corso Italia AA', country:'Naples, AZ 85022', number: '(989) 867-1010'
            }
        ],
        opensAt: [
            {
                day: 'MONDAY', hours: 'Kitchen Closed'
            },
            {
                day: 'TUESDAY UNTIL FRIDAY', hours: '9:00 - 22:00'
            },
            {
                day: "SATURDAY", hours: 'Saturday 11am to midnight'
            },
            {
                day: 'SUNDAY', hours:'9:00 - 22:00'
            }
        ]
    }
})