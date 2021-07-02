import mount from "@test/mount";

import { Footer } from "./index";

describe("Footer component testing with enzyme", () => {
    const component = mount(<Footer />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders pankod logo directed to the correct url", () => {
        expect(component.find("a").at(0).prop("href")).toContain(
            "https://github.com/pankod",
        );
    });

    it("should render 4 icons successfully", () => {
        expect(component.find("li").length).toBe(4);
    });
});
