import { Main } from '../src/app.js';

describe("A suite of tests for the function one_minute_line", function() {

    it("should return '0 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731160827)).toBe(0);
    });

    it("should return '1 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731153405)).toBe(1);
    });

    it("should return '2 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731159131)).toBe(2);
    });

    it("should return '3 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731153525)).toBe(3);
    });

    it("should return '4 lampes allumees'", function() {
        let main = new Main();
        expect(main.one_minute_line(1731153585)).toBe(4);
    });
});

describe("A suite of tests for the function five_minutes_line", function() {

    it("should return '0 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150045)).toBe(0);
    })

    it("should return '1 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150345)).toBe(1);
    })

    it("should return '2 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150645)).toBe(2);
    })

    it("should return '3 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731150945)).toBe(3);
    })

    it("should return '4 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731151245)).toBe(4);
    })

    it("should return '5 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731151545)).toBe(5);
    })

    it("should return '6 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731151845)).toBe(6);
    })

    it("should return '7 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731152145)).toBe(7);
    })

    it("should return '8 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731152445)).toBe(8);
    })

    it("should return '9 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731152745)).toBe(9);
    })

    it("should return '10 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731153045)).toBe(10);
    })

    it("should return '11 lampes sont allumees'", function() {
        let main = new Main();
        expect(main.five_minutes_line(1731153345)).toBe(11);
    })
})

describe("A suite of tests for the function one_hour_line", function() {

    it("should return '1 lampe allumee'", function(){
        let main = new Main();
        expect(main.one_hour_line(1731153345)).toBe(1);
    })

    it("should return '2 lampes allumees'", function(){
        let main = new Main();
        expect(main.one_hour_line(1731241733)).toBe(2);
    })

    it ("should return '3 lampes allumees'", function(){
        let main = new Main();
        expect(main.one_hour_line(1731245333)).toBe(3);
    })

    it ("should return '4 lampes allumees'", function(){
        let main = new Main();
        expect(main.one_hour_line(1731248933)).toBe(4);
    })

    it ("should return '0 lampes allumees'", function(){
        let main = new Main();
        expect(main.one_hour_line(1731252533)).toBe(0);
    })

})

describe("A suite of tests for the function five_hours_line", function() {

    it("should return '1 lampe allumee'", function(){
        let main = new Main();
        expect(main.five_hours_line(1731218109)).toBe(1);
    })

    it("should return '2 lampes allumees'", function(){
        let main = new Main();
        expect(main.five_hours_line(1731236109)).toBe(2);
    })

    it("should return '3 lampes allumees'", function(){
        let main = new Main();
        expect(main.five_hours_line(1731254109)).toBe(3);
    })

    it("should return '4 lampes allumees'", function(){
        let main = new Main();
        expect(main.five_hours_line(1731272109)).toBe(4);
    })

    it("should return '0 lampes allumees'", function(){
        let main = new Main();
        expect(main.five_hours_line(1731290109)).toBe(0);
    })
});

describe("A suite of tests for the function even_second_lamp", function() {

    it("should return 'lampe allumee'", function(){
        let main = new Main();
        expect(main.even_second_lamp(1731160826)).toBe(1);
    });

    it("should return 'lampe eteinte'", function(){
        let main = new Main();
        expect(main.even_second_lamp(1731160827)).toBe(0);
    });

});