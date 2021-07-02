import mount from "@test/mount";

import { Logo } from "./index";

describe("Logo component testing with enzyme", () => {
    const component = mount(<Logo />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
