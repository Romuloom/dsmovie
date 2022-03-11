import axios from "axios";
import MovieCard from "components/MovieCard";
/* import MovieScore from "components/MovieScore"; */
/* import MovieStars from "components/MovieStars"; */
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie"

function Listing() {


    const [pageNamber, setPageNamber] = useState(0)

    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNamber(data.number)
            })
    }, [])


    return (
        <>
            <p>{pageNamber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>


                </div>
            </div>



        </>

    )
}

export default Listing;