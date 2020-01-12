let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'The softest material known to man',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
        link: 'https://www.google.com/search?q=socks&sxsrf=ACYBGNQiaYSe3UvBQiquaMUgVwO9Nep9WA:1576943354764&source=lnms&tbm=isch&sa=X&ved=2ahUKEwizkPfji8fmAhVBa80KHfn-C7cQ_AUoAnoECA8QBA&biw=1680&bih=939&dpr=2',
        inventory: 0,
        onSale: false,
        details: ["80% Cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ],
        sizes: ["XS","S","M","L","XL"]
    }
});