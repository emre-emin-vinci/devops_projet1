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
            return 1;
        }
        if (minutes % 5 === 2) {
            return 2;
        }
        if (minutes % 5 === 3) {
            return 3;
        }
        if (minutes % 5 === 4) {
            return 4;
        }
        return 0; 
    }

    five_minutes_line(timestamp) {
        const minutes = this.getMinutes(timestamp);
        const lamps = Math.floor((minutes % 60) / 5);
        console.log(lamps);
        return lamps;
    }

    one_hour_line(timestamp){
        const hours = this.getHours(timestamp);
        if (hours % 5 === 1) {
            return 1;
        }
        if (hours % 5 === 2) {
            return 2;
        }
        if (hours % 5 === 3) {
            return 3;
        }
        if (hours % 5 === 4) {
            return 4;
        }
        return 0;
    }

    five_hours_line(timestamp) {
        const hours = this.getHours(timestamp);
        const lamps = Math.floor(hours / 5);
        console.log(lamps+" <-- lamps");
        return lamps;
    }

    even_second_lamp(timestamp) {
        if (timestamp % 2 === 0) {
            return 1;
        }
        return 0;
    }
}