import { useState } from 'react';
import BackArrow from '../assets/back-arrow.png'
import SwitchIcon from '../assets/switch.png'
import Styles from './stationStyle.module.css'
const station: { id: number, station_name: string, freq: string }[] = [
    {
        id: 1,
        station_name: "Putin FM",
        freq: "66,6"
    },
    {
        id: 2,
        station_name: "Dribbble FM",
        freq: "101,2"
    },
    {
        id: 3,
        station_name: "Doge FM",
        freq: "99,4"
    },
    {
        id: 4,
        station_name: "Ballads FM",
        freq: "87,1"
    },
    {
        id: 5,
        station_name: "Maximum FM",
        freq: "142,2"
    }
]
const RadioStation = () => {
    const [clickData, setClickData] = useState({})
    const handleStation = (id: number) => {
        setClickData(station[id - 1])
    }
    console.log(clickData);

    return (
        <section>
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <div className={Styles.icon}>
                        <img width='40%' src={BackArrow} alt="" />
                    </div>
                    <div className={Styles.title}>
                        <p>STATIONS</p>
                    </div>
                    <div className={Styles.icon}>
                        <img width='40%' src={SwitchIcon} alt="" />
                    </div>
                </div>
                <div className={Styles.station_Container}>
                    {
                        station.map((data) => (
                            <div key={data.id} onClick={() => handleStation(data.id)} className={Styles.stations}>
                                <p>{data.station_name}</p>
                                <p>{data.freq}</p>
                            </div>
                        ))
                    }
                    <div className={Styles.bottom_station}>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default RadioStation;