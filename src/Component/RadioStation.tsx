import { useState } from 'react';
import BackArrow from '../assets/back-arrow.png'
import SwitchIcon from '../assets/switch.png'
import Styles from './stationStyle.module.css'
import Active_station from '../assets/active_station.png'
import Plus_Icon from '../assets/plus.png'
import MinusIcon from '../assets/minus.png'

// make station list array
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
    // set clickData on state
    const [clickData, setClickData] = useState({
        id: 0,
        station_name: "",
        freq: ""
    })

    // handle onclick station
    const handleStation = (id: number) => {
        setClickData(station[id - 1])
    }

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
                    <div className={Styles.stations_height}>
                        {
                            station.map((data) => (
                                <div key={data.id}>
                                    {/* check if clickable data available then set active image and control */}
                                    {
                                        data.id === clickData.id &&
                                        <div className={Styles.active_container}>
                                            <div>
                                                <img className={Styles.plus_minus_icon} src={Plus_Icon} alt="" />
                                            </div>
                                            <div>
                                                <img className={Styles.active_station} src={Active_station} alt="" />
                                            </div>
                                            <div>
                                                <img className={Styles.plus_minus_icon} src={MinusIcon} alt="" />
                                            </div>
                                        </div>
                                    }
                                    {/* radio station list */}
                                    <div onClick={() => handleStation(data.id)} className={Styles.stations}>
                                        <p>{data.station_name}</p>
                                        <p>{data.freq}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className={Styles.bottom_station}>
                        {/* check if clicked station then show title */}
                        {
                            clickData.id === 0 ? <></> :
                                <div className={Styles.current_plying}>
                                    <p className={Styles.current_title}>CURRENTLY PLAYING</p>
                                    <p className={Styles.current_station}>{clickData.station_name}</p>
                                </div>
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default RadioStation;