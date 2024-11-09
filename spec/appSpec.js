import { Main } from '../src/app.js';

describe("A suite of tests for the function one_minute_line", function() {

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

describe("A suite of tests for the function five_minutes_line", function() {

    it("should return '0 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150045)).toBe('0 lampes allumees');
    })

    it("should return '1 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150345)).toBe('1 lampes allumees');
    })

    it("should return '2 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150645)).toBe('2 lampes allumees');
    })

    it("should return '3 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150945)).toBe('3 lampes allumees');
    })

    it("should return '4 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731151245)).toBe('4 lampes allumees');
    })

    it("should return '5 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731151545)).toBe('5 lampes allumees');
    })

    it("should return '6 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731151845)).toBe('6 lampes allumees');
    })

    it("should return '7 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731152145)).toBe('7 lampes allumees');
    })

    it("should return '8 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731152445)).toBe('8 lampes allumees');
    })

    it("should return '9 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731152745)).toBe('9 lampes allumees');
    })

    it("should return '10 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731153045)).toBe('10 lampes allumees');
    })

    it("should return '11 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731153345)).toBe('11 lampes allumees');
    })
})