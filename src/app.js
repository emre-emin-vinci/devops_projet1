export class Main {
    one_minute_line(timestamp) {
        let minutes = Math.floor(timestamp / 60);
        console.log(timestamp);
        console.log(minutes);
        if (minutes > 0) {
            const result = this.one_minute_lights_display(minutes);
            console.log(result);
            return result;
        }
    }

    one_minute_lights_display(minutes) {
        if (minutes % 5 === 0) {
            return '0 lampes allumees';
        }
        if (minutes % 5 === 1) {
            return '1 lampe allumee';
        }
        if (minutes % 5 === 2) {
            return '2 lampes allumees';
        }
        if (minutes % 5 === 3) {
            return '3 lampes allumees';
        }
        if (minutes % 5 === 4) {
            return '4 lampes allumees';
        }
    }
}