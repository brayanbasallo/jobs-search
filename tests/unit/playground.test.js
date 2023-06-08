import { describe, it, expect } from "vitest";
import { eventOrOdd } from "@/playground";

describe("basic math", () => {
    it("add two numbers", () => {
        expect(1 + 1).toBe(2);
    });

    describe("eventOrOdd", () => {
        describe("when the number is even", () => {
            it("indicates the number is even", () => {
                expect(eventOrOdd(4)).toBe("even");
            });
        });
        describe("when the number is odd", () => {
            it("indicates the number is odd", () => {
                expect(eventOrOdd(3)).toBe("odd");
            });
        });
    });
});