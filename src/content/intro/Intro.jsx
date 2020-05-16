import React from "react";

import styles from "./Intro.module.scss";
import meCropped from "../static/me_cropped.png";
import Background from "./background/Background";

const goToAboutMe = () => document.getElementById("rr-body").scrollIntoView({ behavior: "smooth" });

const Intro = () => {
    return (
        <div className={styles.container}>
            <Background />
            <div className={`rr-content ${styles.intro}`}>
                <div className={styles.content}>
                    <img className={styles.portrait} src={meCropped} alt="" />
                    <div className={styles.textBlock}>
                        <div className={styles.firstLine}>
                            {`Hey, I'm `}
                            <span className="rr-site-link" onClick={goToAboutMe}>
                                Ryan
                            </span>
                            {`!`}
                        </div>
                        <div className={styles.secondLine}>
                            {"I'm a fullstack software engineer."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;