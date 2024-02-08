import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Get full year", function() {
    it("should return the correct year", function() {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
})

describe("Get footer message", function() {
    it("should return the true footer message", function() {
        const currentMessage = getFooterCopy(true);
        expect('Holberton School').toBe(currentMessage);
    });
    it("should return the false footer message", function() {
        const currentMessage = getFooterCopy(false);
        expect('Holberton School main dashboard').toBe(currentMessage);
    })
});

describe("Get latest notification", function() {
    it("should return the urgent massage text", function() {
        const message = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(message);
    });
})