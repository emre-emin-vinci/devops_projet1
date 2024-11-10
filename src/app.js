export class Main {

    getMinutes(timestamp) {
        let minutes = Math.floor(timestamp / 60);
        console.log(timestamp);
        console.log(minutes);
        return minutes;
    }

    getHours(timestamp) {
        let hours = Math.floor((this.getMinutes(timestamp) / 60 ) %24 );
        console.log(hours+" <-- hours");
        return hours;
    }

    one_minute_line(timestamp) {
        const minutes = this.getMinutes(timestamp);
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
        return '0 lampes allumees'; 
    }

    five_minutes_line(timestamp) {
        const minutes = this.getMinutes(timestamp);
        const lamps = Math.floor((minutes % 60) / 5);
        console.log(lamps);
        return `${lamps} lampes allumees`;
    }

    one_hour_line(timestamp){
        const hours = this.getHours(timestamp);
        if (hours % 5 === 1) {
            return '1 lampe allumee';
        }
        if (hours % 5 === 2) {
            return '2 lampes allumees';
        }
        if (hours % 5 === 3) {
            return '3 lampes allumees';
        }
        if (hours % 5 === 4) {
            return '4 lampes allumees';
        }
        return '0 lampes allumees';
    }

    five_hours_line(timestamp) {
        const hours = this.getHours(timestamp);
        const lamps = Math.floor(hours / 5);
        console.log(lamps+" <-- lamps");
        return `${lamps} lampes allumees`;
    }
}