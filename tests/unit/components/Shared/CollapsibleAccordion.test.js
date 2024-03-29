import { screen, render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

describe("CollapsibleAccordion.vue", () => {
    const renderCollapsibleAccordion = (config = {}) => {
        render(CollapsibleAccordion, {
            global: {
                stubs: {
                    FontAwesomeIcon: true,
                }
            },
            props: {
                header: "My category",
            },
            slots: {
                default: "<h3>My nested child</h3>",
            },
            ...config
        })
    }

    it("render child component", async () => {
        renderCollapsibleAccordion();
        expect(screen.queryByText("My nested child")).not.toBeInTheDocument();
        const button = screen.getByRole("button", { name: "My category" });
        await userEvent.click(button);
        expect(screen.queryByText("My nested child")).toBeInTheDocument();
    });

    describe("when parent does not provide custom child content", () => {
        it("renders default content", async () => {
            const props = {
                header: "My category",
            };
            const slots = {}
            renderCollapsibleAccordion({ props, slots });

            const button = screen.getByRole("button", { name: "My category" });
            await userEvent.click(button);
            expect(screen.queryByText("Opps! No content provided.")).toBeInTheDocument();
        })
    })
});