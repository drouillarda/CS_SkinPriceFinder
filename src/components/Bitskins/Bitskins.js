import "./Bitskins.scss";
import ak from './../../assets/images/Ak-47.jpg';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Bitskins = () => {
    const [skin, setSkin] = useState(null);
    const { skinId } = useParams();

    useEffect(() => {
        const getSkins = async (skinId) => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Bitskins/${skinId}`)
                const info = response.data;
                setSkin(info);
            } catch (error) {
                console.log(error);
            }
        };
        getSkins(skinId);
    }, [skinId]);

    return (
        <article className="bitskins">
            {skin && (
            <div className="bitskins__card">
                <h2 className="bitskins__card--heading">Bitskins</h2>
                <div className="bitskins__card--lower">
                <img className="bitskins__card--lower--img" src={ak} alt="Ak-47" />
                    <div className="bitskins__card--lower--details">
                        <p>Skin:{skin.name}</p>
                        <p>Price:{skin.price_min}</p>
                    </div>
                </div>
            </div>
            )}
        </article>
    );
};