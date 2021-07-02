import mount from "@test/mount";

import { Container } from "./index";

describe("Wrapper component testing with enzyme", () => {
    const component = mount(<Container />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
