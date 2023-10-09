
function getRandomDistance() {
    return Math.floor(Math.random() * 200) + 1; 
}


const Dummy_Listings = [
    {
        id: 1,
        image: 'https://maramar.us/wp-content/uploads/2017/11/Santa-Teresa-Villas-Lots-for-sale-MARAMAR-inside.jpg',
        location: 'Santa Teresa, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'May 15 - May 20, 2023',
        price: '$150/night',
    },
    {
        id: 2,
        image: 'https://news.lascatalinascr.com/hubfs/Las%20Catalinas%20branding%20images/Approved%20Images%20-%20Baranda/10CLR_Casa.Mar-y-Sol.001-compressor.jpg',
        location: 'Puntarenas, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'June 1 - June 7, 2023',
        price: '$120/night',
    },
    {
        id: 3,
        image: 'https://www.luxuryvillasincostarica.com/wp-content/uploads/2021/02/Casa-Hamacas-Hacienda-Pinilla-Costa-Rica-homes-for-rent-1024x683.jpeg',
        location: 'Pinilla, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'July 10 - July 15, 2023',
        price: '$180/night',
    },
    {
        id: 4,
        image: 'https://manuelantonioestates.com/wp-content/uploads/2018/01/Y5I3999-Edit.jpg',
        location: 'Manuel Antonio, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'August 5 - August 12, 2023',
        price: '$200/night',
    },
    {
        id: 5,
        image: 'https://www.remax-oceansurf-cr.com/sites/all/themes/remax_drupal_7/images/ROSS-HomePage-luxury-homes-640x400.jpg',
        location: 'Tamarindo, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 3 - September 9, 2023',
        price: '$160/night',
    },
    {
        id: 6,
        image: 'https://nestpropertiescostarica.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-01-at-12.27.55_result.jpg',
        location: 'Flamingo, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 10 - September 14, 2023',
        price: '$130/night',
    },
    {
        id: 7,
        image: 'https://images.adsttc.com/media/images/608a/9e99/8ae0/8701/6455/cd9f/newsletter/casamaru-archdaily-23.jpg?1619697354',
        location: 'Nosara, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 3 - September 9, 2023',
        price: '$160/night',
    },
    {
        id: 8,
        image: 'https://costarica-trip.com/wp-content/uploads/2018/08/puerto-viejo-luxury-hotel-1024x630.jpg',
        location: 'Puerto Viejo, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 3 - September 9, 2023',
        price: '$190/night',
    },
    {
        id: 9,
        image: 'https://5241e237e8ca89f68ae3-93af0715f0ee41f3c44620e30f2e5f01.ssl.cf1.rackcdn.com/properties/photos/16578397987694805.jpg',
        location: 'Playa Hermosa, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'August 5 - August 12, 2023',
        price: '$200/night',
    },
    {
        id: 10,
        image: 'https://logicmls.fastly.propertybase.com/properties/photos/16930587750066473.jpg?width=900&optimize=low&auto=webp',
        location: 'Avellanas, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 3 - September 9, 2023',
        price: '$160/night',
    },
    {
        id: 11,
        image: 'https://puravida.com/wp-content/uploads/2014/02/playa-langosta-real-estate.jpg',
        location: 'Langosta, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 10 - September 14, 2023',
        price: '$140/night',
    },
    {
        id: 12,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/424162214.jpg?k=2a19298b51ca4ad5dea09fe270a6a2a03d68afc8461e2279cb1e95ecc86ae083&o=&hp=1',
        location: 'Playa Grande, Costa Rica',
        distance: `${getRandomDistance()} kilometers away`,
        dates: 'September 3 - September 9, 2023',
        price: '$170/night',
    },
]

export default Dummy_Listings;