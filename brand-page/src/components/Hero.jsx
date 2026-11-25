const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>STYLE YOUR FEETS</h1>
                <p>
                    YOUR FEET DESERVES THE STYLE YOU OWN AND SHOES.
                    WE ARE HERE TO HELP YOU AND PROVIDE YOU THE BEST PRODUCTS 
                    TO THE
                    USERS.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">View All</button>
                </div>

                <div className="shopping">
                    <p>Also Available On </p>

                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe-image" />
            </div>
        </main>
    );
};

export default Hero;