import mount from "@test/mount";

import { Button } from "@components";
import { Main } from "./index";

describe("Main component testing with enzyme", () => {
    const component = mount(<Main />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders texts successfuly", () => {
        expect(component.html()).toContain(
            "The frontend boilerplate with superpowers!",
        );
    });

    it("renders button successfuly", () => {
        expect(component.find(Button)).toBeDefined();
    });
});
