const Home = () => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-md-6">
                        <div className="card-body border bg-light my-5">
                    <h2 className=" card-title text-center">The Studio Ghibli Encyclopedia</h2>
                    <p className="card-text text-center h-100">Studio Ghibli (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio. Based in Koganei, Tokyo, the studio was founded in 1985 by Hayao Miyazaki, Isao Takahata, and Toshio Suzuki. The studio has released several highly acclaimed films over the years, along with animated shorts and commercials. Of the ten highest-grossing anime films in Japan, Studio Ghibli created five, with "Spirited Away" being the second highest-grossing of all time. Other notable films include "My Neighbor Totoro", "Howl's Moving Castle", and "Princess Mononoke".</p>
                    <p className="card-subtitle text-muted text-center my-1"><a href="https://ghibliapi.herokuapp.com/" target="_blank">Studio Ghibli API</a></p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;