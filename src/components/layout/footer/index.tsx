import React from "react";
import {
    PankodIcon,
    GithubIcon,
    TwitterIcon,
    YoutubeIcon,
    LinkedinIcon,
} from "@components/icons";

export const Footer: React.FC = () => {
    return (
        <div className="text-center py-5 bg-gray-800">
            <a
                href="https://github.com/php1301"
                target="_blank"
                className="block mb-3"
            >
                <PankodIcon
                    data-test="icon"
                    className="text-white mx-auto"
                    width="140"
                    height="28"
                />
            </a>

            <ul className="flex justify-center list-none p-0 m-0">
                <li className="mx-3">
                    <GithubIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-3">
                    <TwitterIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="28"
                    />
                </li>
                <li className="mx-3">
                    <YoutubeIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="29"
                    />
                </li>
                <li className="mx-3">
                    <LinkedinIcon
                        data-test="icon"
                        color="white"
                        width="28"
                        height="32"
                    />
                </li>
            </ul>
        </div>
    );
};
