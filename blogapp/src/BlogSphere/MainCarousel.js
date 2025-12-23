import React from "react";

const MainCarousel = () => {
    return (
        <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#blogCarousel" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item active position-relative">
                    <img
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                        className="d-block w-100" data-bs-interval="3000"
                        style={{ height: "500px", objectFit: "cover", filter: "brightness(60%)" }}
                        alt="Library Scene"
                    />

                    <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
                        <h2 className="fw-bold mb-2">Discover Ideas from Around the World</h2>
                        <p>Explore blogs enriched with books, novels, and deep knowledge.</p>
                    </div>
                </div>

                <div className="carousel-item position-relative">
                    <img
                        src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
                        className="d-block w-100" data-bs-interval="3000"
                        style={{ height: "500px", objectFit: "cover", filter: "brightness(60%)" }}
                        alt="Cafe Writing"
                    />

                    <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
                        <h2 className="fw-bold mb-2">Write with a Cup of Inspiration</h2>
                        <p>Your stories come alive wherever creativity flows.</p>
                    </div>
                </div>

                <div className="carousel-item position-relative">
                    <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                        className="d-block w-100" data-bs-interval="3000"
                        style={{ height: "500px", objectFit: "cover", filter: "brightness(60%)" }}
                        alt="Nature Scene"
                    />

                    <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
                        <h2 className="fw-bold mb-2">Get Inspired by the World Outside</h2>
                        <p>Read stories shaped by journeys, emotions, and life.</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#blogCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    );
};

export default MainCarousel;
