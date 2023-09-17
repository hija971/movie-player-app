import React from "react";
import { Link } from "react-router-dom";
import List from "../list/List";

const Section = ({ heading, linkUrl, movies }) => {

    const handleViewAll = () => {

    }

    return (
        <section>
            <div className="py-20">
                <div className="container relative">
                    <div className="flex justify-between items-center mb-8">
                        <h5 className="text-xl font-normal text-white capitalize">{heading}</h5>
                        <Link
                            to={linkUrl}
                            onClick={handleViewAll}
                            className="text-lg font-normal text-red-600 cursor-pointer"
                        >
                            View all
                        </Link>
                    </div>
                    <List movies={movies} />
                </div>
            </div>
        </section>
    );
};

export default Section;
