import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing.vue", () => {
    const createJobProps = (jobProps = {}) => ({
        title: "Test Job Title",
        organization: "Test Organization",
        locations: ["Test Location"],
        minimumQualifications: ["Test Qualification"],
        ...jobProps,
    });

    const renderJobListing = (jobProps) => {
        render(JobListing, {
            global: {
                stubs: {
                    RouterLink: RouterLinkStub,
                },
            },
            props: {
                job: {
                    ...jobProps,
                },
            }
        });
    };
    it("renders job title", () => {
        const jobProps = createJobProps({ title: "Vue programmer" });
        renderJobListing(jobProps);
        expect(screen.getByText("Vue programmer")).toBeInTheDocument();
    });

    it("renders job organization", () => {
        const jobProps = createJobProps({ organization: "Apple" });
        renderJobListing(jobProps);
        expect(screen.getByText("Apple")).toBeInTheDocument();
    });

    it("renders job location", () => {
        const jobProps = createJobProps({
            locations: ["San Francisco", "California"]
        });
        renderJobListing(jobProps);
        expect(screen.getByText("San Francisco")).toBeInTheDocument();
        expect(screen.getByText("California")).toBeInTheDocument();
    });

    it("renders job qualifications", () => {
        const jobProps = createJobProps({
            minimumQualifications: ["Vue", "JavaScript"]
        });
        renderJobListing(jobProps);
        expect(screen.getByText("Vue")).toBeInTheDocument();
        expect(screen.getByText("JavaScript")).toBeInTheDocument();
    });
});