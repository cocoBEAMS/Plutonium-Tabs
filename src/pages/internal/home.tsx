import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Head from "../../components/head";
import { github, discord } from "../../consts";
import "../../style/home.css";
import { Obfuscated } from "../../components/obfuscate";
import { useLocalAppearance } from "../../settings";

function InternalHome() {
    const mainSearch = React.useRef<HTMLInputElement>(null);
    const [localAppearance, setLocalAppearance] = useLocalAppearance();
    const [theme, setTheme] = React.useState(
        !getComputedStyle(window.document.body)
            .getPropertyValue("--primary")
            .startsWith("linear-gradient(")
            ? "var(--primary)"
            : getComputedStyle(window.document.body)
                  .getPropertyValue("--primary")
                  .split("linear-gradient(")[1]
                  .split(",")[1]
                  .trim()
    );

    // @ts-ignore
    window.changeTheme = (theme) => {
        setLocalAppearance(theme);
    };

    React.useEffect(() => {
        setTheme(
            !getComputedStyle(window.document.body)
                .getPropertyValue("--primary")
                .startsWith("linear-gradient(")
                ? "var(--primary)"
                : getComputedStyle(window.document.body)
                      .getPropertyValue("--primary")
                      .split("linear-gradient(")[1]
                      .split(",")[1]
                      .trim()
        );
    }, [localAppearance]);

    React.useEffect(() => {
        mainSearch?.current?.focus();
    }, []);

    const searchType = (e: any) => {
        if (e.key == "Enter" && e.target.value) {
            // @ts-ignore
            return window.parent.Cobalt.navigate(e.target.value);
        }
    };

    return (
        <>
            <Head defaultTitle="Home" />
            <div className="home">
                <div className="logo"> <src"Plutonium.svg"
                  
                        <title>Plutonium</title>
                        <path
                            fill={theme}
                            d="M 0 13.023 L 4.429 18.595 L 20.714 18.261 L 24 12.309 L 20.998 3.971 L 13.88 8.904 L 7.919 7.125 L 0 13.023 Z"
                        ></path>
                    </svg>
                </div>
                <div className="homeOmnibox">
                    <input
                        ref={mainSearch}
                        className="mainSearch"
                        onKeyUp={searchType}
                    />
                    <div className="homeSearchIcon">
                        <SearchIcon style={{ height: "70%", width: "70%" }} />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Obfuscated>Credit: Cog Network </Obfuscated>
                <a target="_blank" href={discord}>
                    <Obfuscated>Discord</Obfuscated>
                </a>
                <Obfuscated> / </Obfuscated>
                <a target="_blank" href={github}>
                    <Obfuscated>Source</Obfuscated>
                </a>
            </div>
        </>
    );
}

export default InternalHome;
