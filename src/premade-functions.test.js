import { describe, expect, it } from "vitest";
import { findLongestWord, charCount, mergeSortedArrays, groupBy, debounce } from "./premade-functions.js";

describe("findLongestWord", () => {

    it("should recieve a string and return the longest word", () => {
        // TODO
        // expect(...)
        expect(findLongestWord("I love Programming")).toBe("programming");
    }
    );
}
);

// Lav selv tests for de andre functions...
describe("charCount", () => {
    it("should recieve a string and return an object with character counts", () => {
        expect(charCount("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    }
    );
});

describe("mergeSortedArrays", () => {
    it("should recieve two sorted arrays and return a single sorted array", () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    }
    );
});
describe("flattenArray", () => {
    it("should recieve a nested array and return a flat array", () => {
        expect(flattenArray([1, [2, [3, 4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
    }
    );
});

describe("groupBy", () => {
    it("should recieve an array and a function, and return an object grouped by the function's return value", () => {
        const array = [6.1, 4.2, 6.3];
        const func = Math.floor;
        const result = {
            4: [4.2],
            6: [6.1, 6.3]
        };
        expect(groupBy(array, func)).toEqual(result);
    }
    );
});

describe("debounce", () => {
    it("should delay the execution of a function until after a specified wait time has elapsed", (done) => {
        let counter = 0;
        const increment = () => {
            counter++;
        };
        const debouncedIncrement = debounce(increment, 100);

        debouncedIncrement();
        debouncedIncrement();
        debouncedIncrement();

        setTimeout(() => {
            expect(counter).toBe(1);
            done();
        }, 200);
    }
    );
});