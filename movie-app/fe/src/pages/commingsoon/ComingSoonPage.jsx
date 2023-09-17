import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../img/commingSoon/Coming-soon-min.jpg";

const ComingSoonPage = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState({
        email: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            navigate("/");
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countDownDate = new Date("2023-12-31").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);

            if (distance <= 0) {
                clearInterval(interval);
            }
        }, 1000);
    }, []);

    return (
        <>
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <div className="container">
                    <div className="flex items-center min-h-screen">
                        <div className="w-1/2">
                            <h2 className="text-5xl font-medium text-white my-20">We Are Coming Back Soon</h2>
                            <div className="flex justify-between text-white mb-12">
                                <div className="flex flex-col items-center">
                                    <span className="text-5xl font-medium mb-4">{days}</span>
                                    <span className="font-medium">Days</span>
                                </div>
                                <span className="flex items-center text-5xl font-bold text-red-600">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-5xl font-medium mb-4">{hours}</span>
                                    <span className="font-medium">Hours</span>
                                </div>
                                <span className="flex items-center text-5xl font-bold text-red-600">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-5xl font-medium mb-4">{minutes}</span>
                                    <span className="font-medium">Minutes</span>
                                </div>
                                <span className="flex items-center text-5xl font-bold text-red-600">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-5xl font-medium mb-4">{seconds}</span>
                                    <span className="font-medium">Seconds</span>
                                </div>
                            </div>
                            <div>
                                <form
                                    className="flex"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email.email}
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded bg-gradient-to-l from-black to-zinc-800 text-stone-300 text-sm focus:outline-none"
                                        onChange={(e) => setEmail({ email: e.target.value })}
                                    />
                                    <button
                                        type="submit"
                                        className="rounded px-8 bg-red-600 text-white"
                                    >
                                        SUBCRIBE
                                    </button>
                                </form>
                            </div>
                            <div className="text-white text-lg mt-4">We are working very hard on the new version</div>
                            <div className="flex items-center text-white mt-12">
                                <span className="mr-2">Follow Us:</span>
                                <div>
                                    <ul className="flex items-center">
                                        <li className="flex justify-center items-center border rounded-full w-8 h-8 mx-2 hover:bg-red-600 hover:border-red-600 animate-bounce transform transition-transform duration-300 cursor-pointer">
                                            <Link><i className="fa-brands fa-facebook-f"></i></Link>
                                        </li>
                                        <li className="flex justify-center items-center border rounded-full w-8 h-8 mx-2 hover:bg-red-600 hover:border-red-600 animate-bounce transform transition-transform duration-300 cursor-pointer">
                                            <Link><i className="fa-brands fa-instagram"></i></Link>
                                        </li>
                                        <li className="flex justify-center items-center border rounded-full w-8 h-8 mx-2 hover:bg-red-600 hover:border-red-600 animate-bounce transform transition-transform duration-300 cursor-pointer">
                                            <Link><i className="fa-brands fa-twitter"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComingSoonPage;