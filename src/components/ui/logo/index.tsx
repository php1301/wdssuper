import React from "react";
import { NextjsIcon } from "@components/icons";

export const Logo: React.FC = () => {
    return (
        <NextjsIcon
            data-test="icon"
            className="text-white mx-auto"
            width="96"
            height="58"
        />
    );
};
