import { Main } from '../src/app.js';

describe("A suite of test for the function one_minute_line", function() {

    it("should return '0 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731160827)).toBe('0 lampes allumees');
    });

    it("should return '1 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731153405)).toBe('1 lampe allumee');
    });

    it("should return '2 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731159131)).toBe('2 lampes allumees');
    });

    it("should return '3 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731153525)).toBe('3 lampes allumees');
    });

    it("should return '4 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731153585)).toBe('4 lampes allumees');
    });
});