import BackArrow from '../assets/back-arrow.png'
import SwitchIcon from '../assets/switch.png'
import Styles from './stationStyle.module.css'
const RadioStation = () => {
    return (
        <section>
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <div className={Styles.icon}>
                        <img width='50%' src={BackArrow} alt="" />
                    </div>
                    <div className={Styles.title}>
                        <p>STATIONS</p>
                    </div>
                    <div className={Styles.icon}>
                        <img width='50%' src={SwitchIcon} alt="" />
                    </div>
                </div>
                <div className={Styles.station_Container}>
                    <div className={Styles.stations}>
                        <p>Putin FM</p>
                        <p>66,6</p>
                    </div>
                    <div className={Styles.stations}>
                        <p>Dribbble FM</p>
                        <p>101,2</p>
                    </div>
                    <div className={Styles.stations}>
                        <p>Doge FM</p>
                        <p>99,4</p>
                    </div>
                    <div className={Styles.stations}>
                        <p>Ballads FM</p>
                        <p>87,1</p>
                    </div>
                    <div className={Styles.stations}>
                        <p>Maximum FM</p>
                        <p>142,2</p>
                    </div>
                    <div style={{ height: "50px" }}>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default RadioStation;