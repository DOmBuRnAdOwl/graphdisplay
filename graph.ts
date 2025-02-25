namespace displayGraph {
    let letters: { [key: string]: number[][] } = {
        "k": [[1, 0, 0], [1, 0, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1]],
        "A": [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
        "B": [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 1, 0]],
        "C": [[0, 1, 1], [1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 1, 1]],
        "D": [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]],
        "E": [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 1, 1]],
        "F": [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 0, 0]],
        "G": [[0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 0, 1], [0, 1, 1]],
        "H": [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
        "I": [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
        "J": [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 0]],
        "K": [[1, 0, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]],
        "L": [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]],
        "M": [[1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]],
        "N": [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]],
        "O": [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]],
        "P": [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 0], [1, 0, 0]],
        "Q": [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 1]],
        "R": [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]],
        "S": [[0, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0]],
        "T": [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
        "U": [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]],
        "V": [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
        "W": [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1]],
        "X": [[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1], [1, 0, 1]],
        "Y": [[1, 0, 1], [1, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
        "Z": [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]],
        "0": [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
        "1": [[0, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
        "2": [[1, 1, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]],
        "3": [[1, 1, 0], [0, 0, 1], [0, 1, 0], [0, 0, 1], [1, 1, 0]],
        "4": [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]],
        "5": [[1, 1, 1], [1, 0, 0], [1, 1, 0], [0, 0, 1], [1, 1, 0]],
        "6": [[0, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 1], [0, 1, 0]],
        "7": [[1, 1, 1], [0, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
        "8": [[0, 1, 0], [1, 0, 1], [0, 1, 0], [1, 0, 1], [0, 1, 0]],
        "9": [[0, 1, 0], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 0]]
    }
    function write(word: string, startx: number, starty: number) {
        word.split('').forEach((letter, count) => {
            const upperLetter = letter.toUpperCase();
            if (letters[upperLetter] != null) {
                const bitmap = letters[upperLetter];
                bitmap.forEach((row, y) => {
                    row.forEach((pixel, x) => {
                        screen().setPixel(x + startx + (count * 4), y + starty, 1 - pixel);
                    });
                });
            }

        });
    }


    export class inputData {
        public value: number;
        public colour: number;
        constructor(
            public name: string,
            value: number,
            colour: number
        ) {
            this.value = value;
            this.colour = colour;
        }
    }

    //% blockId=graphcolorindexpicker block="$index" blockHidden=true
    //% index.fieldEditor="colornumber"
    //% index.fieldOptions.valueMode="index"
    //% index.fieldOptions.colours='["#000000","#ffffff","#ff2121","#ff93c4","#ff8135","#fff609","#249ca3","#78dc52","#003fad","#87f2ff","#8e2ec4","#a4839f","#5c406c","#e5cdc4","#91463d","#000000"]'
    //% index.fieldOptions.decompileLiterals="true"
    export function __colorIndexPicker(index: number) {
        return index;
    }


    //% block="name $name value $value colour $c=graphcolorindexpicker"
    //% value.shadow=math_number
    //% blockId=graphCreateInput
    //% c.defl=8
    //% weight=80
    export function createIV(name: string, value: number, c: number): inputData {
        return new inputData(name, value, c);
    }


    function drawKey(data: inputData[]): void {
        const SCREEN_WIDTH = bitmaps.width(screen());
        const SCREEN_HEIGHT = bitmaps.height(screen());

        const KEY_Y_START = 5;
        const KEY_X_START = 2;

        for (let i = 0; i < data.length; i++) {
            let akey = data[i].name;
            for (let x = KEY_X_START; x < KEY_X_START + 4; x++) {
                for (let y = KEY_Y_START; y < KEY_Y_START + 5; y++) {
                    screen().setPixel(x, y + (i * 10), data[i].colour);
                }
            }
            write(akey, KEY_X_START + 10, KEY_Y_START + i * 10);
        }
    }
    //% block="plot pie chart array $data"
    //% blockId=graphPieChartArray
    //% data.shadow=lists_create_with
    //% data.defl=graphCreateInput
    //% weight=100
    export function pieChartImpl(data: inputData[],includeKey=false): void {
        screen().fill(1); // fill with white
        const SCREEN_WIDTH = bitmaps.width(screen());
        const SCREEN_HEIGHT = bitmaps.height(screen());

        if(includeKey){
            drawKey(data);
        }

        let values: number[] = [];
        for (let i = 0; i < data.length; i++) {
            values.push(data[i].value);
        }

        const valueSum = values.reduce((a, b) => a + b, 0);
        const normalisedValues = values.map(val => val / valueSum);

        const cumulativeValues = [];
        let cumulativeSum = 0;
        for (const val of normalisedValues) {
            cumulativeValues.push(cumulativeSum + val);
            cumulativeSum += val;
        }

        // valsScaled is between 0 and 1

        const radius = (SCREEN_HEIGHT / 2) * 0.8;
        const yMid = Math.floor(SCREEN_HEIGHT / 2);

        let xMid = Math.floor(SCREEN_WIDTH/2);
        
        if(includeKey){
            drawKey(data);
            xMid = SCREEN_WIDTH - (radius + 5);
        }

        for (let x = -radius; x <= radius; x++) {
            for (let y = -radius; y <= radius; y++) {
                if (x * x + y * y <= radius * radius) {
                    // Between -pi and pi
                    const angle = Math.atan2(y, x);
                    const angleLerp = (angle + Math.PI) / (2 * Math.PI);

                    for (let i = 0; i < cumulativeValues.length; i++) {
                        if (angleLerp <= cumulativeValues[i]) {
                            screen().setPixel(xMid + x, yMid + y, data[i].colour);
                            break;
                        }
                    }
                }
            }
        }
    }

    //% block="plot bar chart for array $data"
    //% blockId=graphBarChartArray
    //% data.shadow=lists_create_with
    //% data.defl=graphCreateInput
    //% weight=100
    export function barChart(data: inputData[], includeKey: boolean = false) {
        screen().fill(1); // fill with white
        const SCREEN_WIDTH = bitmaps.width(screen());
        const SCREEN_HEIGHT = bitmaps.height(screen());
        const BASE_BORDER = 10;
        let TOP_BORDER = 10;
        const LEFT_BORDER = 10;

        if (includeKey) {
            drawKey(data);
            TOP_BORDER = (7 * data.length) + 10;
        }


        let minValue = data[0].value;
        let maxValue = data[0].value;
        let values: number[] = [];
        for (let i = 0; i < data.length; i++) {
            values.push(data[i].value);
            let elem = data[i].value;
            if (elem < minValue) {
                minValue = elem;
            }
            if (elem > maxValue) {
                maxValue = elem;
            }
        }
        const numBars = values.length;



        let xAxisY = 0;
        if (minValue >= 0) {
            xAxisY = SCREEN_HEIGHT - (BASE_BORDER - 1 + TOP_BORDER);
        } else {
            xAxisY = ((SCREEN_HEIGHT - BASE_BORDER - TOP_BORDER) * (maxValue) / (maxValue - minValue));
        }
        for (let i = 0; i < SCREEN_WIDTH; i++) {
            screen().setPixel(i, xAxisY + TOP_BORDER, 0);
        }

        for (let i = 0; i < SCREEN_HEIGHT; i++) {
            screen().setPixel(LEFT_BORDER - 1, i, 0);
        }

        const BAR_SCREEN_WIDTH = SCREEN_WIDTH - LEFT_BORDER;
        const BAR_SCREEN_HEIGHT = SCREEN_HEIGHT - BASE_BORDER - TOP_BORDER;
        if (numBars >= BAR_SCREEN_WIDTH) {
            //error, too much to plot
            screen().fill(2);
            return;
        }

        //try to have a separator between bars of 0.2 * bar width
        //if that is not possible, divide by 1 pixel
        //if that is not possible, divide by a float to spread bars across available space
        let BAR_BLOCK_SPACE = (BAR_SCREEN_WIDTH) / numBars;
        let BAR_BLOCK_WIDTH = Math.max(Math.floor(BAR_BLOCK_SPACE * 0.8), 1);
        let BAR_BLOCK_SEPARATION = Math.max((BAR_SCREEN_WIDTH - (BAR_BLOCK_WIDTH * numBars)) / (numBars + 1), 0);



        //if there are no negative values

        let xOffset = LEFT_BORDER + BAR_BLOCK_SEPARATION;
        if (minValue >= 0) {
            for (let i = 0; i < values.length; i++) {
                let heightLerp = values[i] / (maxValue);
                let heightPixels = Math.floor(heightLerp * BAR_SCREEN_HEIGHT);

                screen().fillRect(Math.floor(xOffset), (xAxisY - heightPixels) + TOP_BORDER, BAR_BLOCK_WIDTH, heightPixels, data[i].colour);
                xOffset += (BAR_BLOCK_WIDTH + BAR_BLOCK_SEPARATION);
            }

        } else {
            // handle bars when there are negative values
            for (let i = 0; i < values.length; i++) {
                let heightLerp = Math.abs(values[i]) / (maxValue - minValue);
                let heightPixels = Math.floor(heightLerp * BAR_SCREEN_HEIGHT);

                if (values[i] >= 0) {
                    // For positive values, draw upwards
                    screen().fillRect(xOffset, (xAxisY - heightPixels) + TOP_BORDER, BAR_BLOCK_WIDTH, heightPixels, data[i].colour);
                } else {
                    // For negative values, draw downwards
                    screen().fillRect(xOffset, xAxisY + TOP_BORDER + 1, BAR_BLOCK_WIDTH, heightPixels, data[i].colour);
                }
                xOffset += (BAR_BLOCK_WIDTH + BAR_BLOCK_SEPARATION);
            }
        }
    }
}

