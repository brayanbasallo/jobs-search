import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";

import JobListings from "@/components/JobResults/JobListings.vue";

vi.mock("axios")


describe("JobListings.vue", () => {
    it("fetches jobs", () => {
        axios.get.mockReturnValue({data: []})
        render(JobListings)
        expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
    });

    it("creates a job listing for each job", async () => {
        axios.get.mockReturnValue({ data: Array(15).fill({}) })

        render(JobListings, {
            global: {
                stubs: {
                    RouterLink: RouterLinkStub
                }
            }
        })
        const jobListings = await screen.findAllByRole("listitem")
        expect(jobListings).toHaveLength(15)
    })
});