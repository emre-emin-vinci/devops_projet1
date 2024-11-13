export class Main {
    

    // 'Y' means yellow color, 'R' means red color and 'O' means off (clock method)

    // Function to convert the timestamp into minutes
    getMinutes(timestamp) {
        let minutes = Math.floor(timestamp / 60);
        console.log(timestamp);
        console.log(minutes);
        return minutes;
    }

    // Function to convert the timestamp into hours
    getHours(timestamp) {
        let hours = Math.floor((this.getMinutes(timestamp) / 60 ) %24 );
        console.log(hours+" <-- hours");
        return hours;
    }

    // Function to calculate the number of lamps to be lit in the one minute line
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

    // Function to calculate the number of lamps to be lit in the five minutes line
    five_minutes_line(timestamp) {
        const minutes = this.getMinutes(timestamp);
        const lamps = Math.floor((minutes % 60) / 5);
        console.log(lamps);
        return lamps;
    }

    // Function to calculate the number of lamps to be lit in the one hour line
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

    // Function to calculate the number of lamps to be lit in the five hours line
    five_hours_line(timestamp) {
        const hours = this.getHours(timestamp);
        const lamps = Math.floor(hours / 5);
        console.log(lamps+" <-- lamps");
        return lamps;
    }

    // Function to determine if the seconds lamp should be lit
    even_second_lamp(timestamp) {
        if (timestamp % 2 === 0) {
            return 1;
        }
        return 0;
    }

    // Function to display the Berlin Clock
    clock(timestamp) {
        const seconds_lamp = this.even_second_lamp(timestamp);
        console.log(seconds_lamp+" <-- seconds_lamp");
        
        let five_hours_line = this.five_hours_line(timestamp);
        console.log(five_hours_line+" <-- five_hours_line");
        

        let one_hour_line = this.one_hour_line(timestamp);
        console.log(one_hour_line+" <-- one_hour_line");
        
        let five_minutes_line = this.five_minutes_line(timestamp);
        console.log(five_minutes_line+" <-- five_minutes_line");

        let one_minute_line = this.one_minute_line(timestamp);
        console.log(one_minute_line+" <-- one_minute_line");

        let return_text = new Array;
        let temp = '';
        let i = 0;
        let result= '';
        let index = 1;

        if(seconds_lamp === 0) {
            return_text.push('O');
        } else {
            return_text.push('R');
        }
        console.log(return_text+" <-- return_text");
        console.log(temp+" <-- temp");
        
        

        for (i = 0; i < 4; i++) {
            temp = this.modularLightDisplay(five_hours_line, 'R', temp)    
            five_hours_line--;
        };
        temp = this.appendTemporaryValue(return_text, temp);

        for (i = 0; i < 4; i++) {
            temp = this.modularLightDisplay(one_hour_line, 'R', temp)    
            one_hour_line--;
        };
        temp = this.appendTemporaryValue(return_text, temp);

        for(i=0; i<11; i++){
            [temp, index] = this.fiveMinutesLightDisplay(five_minutes_line, index, temp);
            five_minutes_line--;
        }
        temp = this.appendTemporaryValue(return_text, temp);

        for (i = 0; i < 4; i++) {
            temp = this.modularLightDisplay(one_minute_line, 'Y', temp)    
            one_minute_line--;
        };
        temp = this.appendTemporaryValue(return_text, temp);

        for(let line of return_text) {
            result = result + line + '\n';
        }
        return result;
    }

    // Function to generate the color of the five minutes line
    fiveMinutesLightDisplay(five_minutes_line, index, temp) {
        if (five_minutes_line > 0) {
            temp = this.appendColorBasedOnIndex(index, temp);
            index++;
        } else {
            temp = temp + 'O';
        }
        return [temp, index];
    }

    // Function to append the color based on the index
    appendColorBasedOnIndex(index, temp) {
        if (index % 3 == 0) {
            temp = temp + 'R';
        } else {
            temp = temp + 'Y';
        }
        return temp;
    }

    // Function to append one line of the clock to the return_text
    appendTemporaryValue(return_text, temp) {
        return_text.push(temp);
        console.log(return_text + " <-- return_text");
        console.log(temp + " <-- temp");
        return temp = '';
    }

    // Function to determine the amount of light to be displayed and its color
    modularLightDisplay(number, color, temp) {
        if (number > 0) {
            temp = temp + color;
        } else {
            temp = temp + 'O';
        }
        return temp;
    }
}