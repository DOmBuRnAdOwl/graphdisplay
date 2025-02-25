enum graphType {
    NONE =0,
    BAR = 1,
    PIE = 2
}

namespace displayGraph {
    let letters: { [key: string]: number[][] } = {
        // curtesy of https://github.com/hgcummings/pixel-fonts/blob/master/data/slumbers.json
        "A": [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]], "B": [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 1, 0]], "C": [[0, 1, 1], [1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 1, 1]], "D": [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]], "E": [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 1, 1]], "F": [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 0, 0]], "G": [[0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 0, 1], [0, 1, 1]], "H": [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]], "I": [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]], "J": [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 0]], "K": [[1, 0, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]], "L": [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]], "M": [[1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]], "N": [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]], "O": [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]], "P": [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 0], [1, 0, 0]], "Q": [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 1]], "R": [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]], "S": [[0, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0]], "T": [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]], "U": [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]], "V": [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]], "W": [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1]], "X": [[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1], [1, 0, 1]], "Y": [[1, 0, 1], [1, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]], "Z": [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]], "0": [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]], "1": [[0, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]], "2": [[1, 1, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]], "3": [[1, 1, 0], [0, 0, 1], [0, 1, 0], [0, 0, 1], [1, 1, 0]], "4": [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]], "5": [[1, 1, 1], [1, 0, 0], [1, 1, 0], [0, 0, 1], [1, 1, 0]], "6": [[0, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 1], [0, 1, 0]], "7": [[1, 1, 1], [0, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]], "8": [[0, 1, 0], [1, 0, 1], [0, 1, 0], [1, 0, 1], [0, 1, 0]], "9": [[0, 1, 0], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 0]], "-": [[0,0,0],[0,0,0],[1,1,1],[0,0,0],[0,0,0]]
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

    let SCREEN_WIDTH = 0;
    let SCREEN_HEIGHT = 0;
    let BASE_BORDER = 0;
    let TOP_BORDER = 0;
    let LEFT_BORDER = 0;
    let data:inputData[]|null=null;
    let TITLE = "";
    let SHOWKEY = false;
    let SELECTEDGRAPH =  graphType.NONE;

    export function redraw(){
        screen().fill(1);
        SCREEN_WIDTH = bitmaps.width(screen());
        SCREEN_HEIGHT = bitmaps.height(screen());
        TOP_BORDER = 5;
        LEFT_BORDER=5;
        BASE_BORDER = 0;
        if (TITLE!="") {
            let pixelsNeeded = TITLE.length * 4;
            let startX = (SCREEN_WIDTH - pixelsNeeded) / 2;
            if (startX <= 10) {
                //title too long
            } else {
                write(TITLE, startX, TOP_BORDER);
                TOP_BORDER += 7;
            }
        }
        if(!data){
            return;
        }
        if (SHOWKEY) {
            let maxLen=0;
            for (let i = 0; i < data.length; i++) {
                let akey = data[i].name;
                for (let x = LEFT_BORDER; x < LEFT_BORDER + 4; x++) {
                    for (let y = TOP_BORDER; y < TOP_BORDER + 5; y++) {
                        screen().setPixel(x, y + (i * 10), data[i].colour);
                    }
                }
                if(data[i].name.length > maxLen){
                    maxLen=data[i].name.length;
                }
                write(akey, LEFT_BORDER + 10, TOP_BORDER + i * 10);
            }
            TOP_BORDER += (10*data.length);
            LEFT_BORDER += (10 + (maxLen*4));
        }
        switch(SELECTEDGRAPH){
            case graphType.NONE:
                return;
            case graphType.BAR:
                drawBarChart();
                return;
            case graphType.PIE:
                drawPieChart();
                return;
        }
    }

    function drawBarChart(): void {
        BASE_BORDER =10;

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

        let minString = convertToText(Math.round(minValue));
        let maxString = convertToText(Math.round(maxValue));
        
        let Y_AXIS_OFFSET=5+Math.max(minString.length,maxString.length)*4;
        
        write("0",Y_AXIS_OFFSET-6,xAxisY-3+TOP_BORDER );
        screen().setPixel(Y_AXIS_OFFSET-1,xAxisY+TOP_BORDER,0);

        write(maxString,Y_AXIS_OFFSET - ((maxString.length*4) +1),TOP_BORDER -1);
        screen().setPixel(Y_AXIS_OFFSET-1,TOP_BORDER,0);

        if(minValue <=0){
            write(minString,Y_AXIS_OFFSET - ((minString.length*4)+1),SCREEN_HEIGHT-BASE_BORDER-2);
            screen().setPixel(Y_AXIS_OFFSET-1,SCREEN_HEIGHT-BASE_BORDER-1,0);
        }

        for (let i = Y_AXIS_OFFSET; i < SCREEN_WIDTH; i++) {
            screen().setPixel(i, xAxisY + TOP_BORDER, 0);
        }

        for (let i = TOP_BORDER; i < SCREEN_HEIGHT-BASE_BORDER; i++) {
            screen().setPixel(Y_AXIS_OFFSET, i, 0);
        }

        const BAR_SCREEN_WIDTH = SCREEN_WIDTH - Y_AXIS_OFFSET;
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

        let xOffset = Y_AXIS_OFFSET + BAR_BLOCK_SEPARATION;
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

    function drawPieChart(): void {
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

        let yRange = SCREEN_HEIGHT*0.8;
        let xRange = SCREEN_WIDTH-LEFT_BORDER;
        const radius = (Math.min(xRange,yRange) /2)*0.9;
        const yMid = Math.floor(SCREEN_HEIGHT / 2);

        let xMid = Math.floor((SCREEN_WIDTH-LEFT_BORDER)/2)+LEFT_BORDER;
        
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
    //
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

    //% block="plot bar chart for array $providedData"
    //% blockId=graphBarChartArray
    //% providedData.shadow=lists_create_with
    //% providedData.defl=graphCreateInput
    //% weight=100
    export function barChart(providedData: inputData[]) {
        SELECTEDGRAPH=graphType.BAR;
        data = providedData;
        redraw()
    }

    //% block="plot pie chart for array $providedData"
    //% blockId=graphPieChartArray
    //% providedData.shadow=lists_create_with
    //% providedData.defl=graphCreateInput
    //% weight=100
    export function pieChart(providedData: inputData[]) {
        SELECTEDGRAPH=graphType.PIE;
        data = providedData;
        redraw()
    }
    
    //% block="set title $providedTitle"
    export function setTitle(providedTitle:string):void{
        TITLE=providedTitle;
        redraw();
    }
    
    //%block="draw key $keyChoice"
    //keyChoice.shadow=toggleOnOff
    //keyChoice.defl=false
    export function drawKey(keyChoice:boolean):void{
        SHOWKEY=keyChoice;
        redraw();
    }

    //function that retrieved heading from a datalogger file
    //and then sums each column to find  a total
    //these totals can then be plotted on a graph
    //can handle columns being added within the log
    //introduces a requirment on datalgger, this probably isnt the place for it
    //%block="sum datalogger contents"
    export function sumDataLogger():inputData[]{
        let headers = datalogger.getRows(0, 1);
        let titles = headers.split(",");
        let colCount = titles.length;

        let sums: displayGraph.inputData[] = [];
        for (let i = 1; i < titles.length; i++) {
            sums.push(new displayGraph.inputData(titles[i], 0, i+1));
        }
        for (let i = 1; i < datalogger.getNumberOfRows(); i++) {
            let row = datalogger.getRows(i, 1);
            let values = row.split(",");
            if(values.length != colCount){
                for (let j = colCount; j < values.length; j++) {
                    sums.push(new displayGraph.inputData(values[j], 0, j+1));
                }
                colCount = values.length;
            }else{
                for (let j = 0; j < values.length-1; j++) {
                    sums[j].value +=parseFloat(values[j+1]);
                }
            }
        }
        return sums;
    }
}
