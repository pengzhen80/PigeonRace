//step1: filter case input :[],ele : [datas]; check if size === datas.length
//step2: calculate each data's cost
//step3: make output :"case # index+1:cost"

function number_inputs(inputs)
{
    var result = [];
    for(var i=0;i<inputs.length;i++)
    {
        var data = [];
        for(var j=0;j<inputs[i].length;j++)
        {
            data.push(Number(inputs[i][j]));
        }
        result.push(data);
    }
    return result;
}

function filter_cases(inputs) {
    inputs = number_inputs(inputs);
    var result = [];
    for (var i = 0; i < inputs.length - 1;) {
        // console.log(inputs[i].length);
        // console.log(inputs[i]);
        if (inputs[i].length == 1) {
            // console.log('size line or one number');
            // console.log('size mustbe ',inputs[i][0]);
            // console.log('size is',inputs[i+1].length);
            if (inputs[i + 1].length === Number(inputs[i][0])) {
                // console.log('corret size');
                result.push(inputs[i + 1]);
                i = i + 2;
            }
            else {
                // console.log('wrong size');
                i++;
            }
        }
        else {
            i++;
        }
    }
    return result;
}

function calculate_cost(datas) {
    var result = 0;
    for (var i = 0; i < datas.length - 1; i++) {
        var min = datas[i];
        var minIndex = i;
        var cost = 0;
        for (var j = i; j < datas.length; j++) {
            if (datas[j] < min) {
                minIndex = j;
                min = datas[j];
            }
        }
        // var tmp = datas[i];
        // datas[i] = min;
        // datas[minIndex] = tmp;
        cost = minIndex - i + 1;
        result += cost ;
        // console.log('min',min);
        // console.log('index',minIndex);
        //sort i to minInex
        for(var k = i;k <=minIndex-1;k++)
        {
            for(var l=k;l<=minIndex;l++)
            {
                if(datas[l]<datas[k])
                {
                    var tmp = datas[k];
                    datas[k] = datas[l];
                    datas[l] = tmp;
                }
            }
        }
    }
    return result;
}

function makeOutPut(datas) {
    var result = [];
    for (var i = 0; i < datas.length; i++) {
        var str = 'Case #' + (i + 1).toString() + ':'+' '+datas[i].toString();
        result.push(str);
    }
    return result;
}

// var inputs = filter_cases(sample);
// var costs = [];
// for(var i=0;i<inputs.length;i++)
// {
//     var cost = calculate_cost(inputs[i]);
//     costs.push(cost);
// }
// var outputs = makeOutPut(costs);

function readInput() {
    const readline = require('readline')
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    var sample = [];
    rl.on('line', function (line) {
            const line_data = line.split(' ');
            sample.push(line_data);
        }
    );

    rl.on('close', () => {
            // Finished processing input, now solve question
            // console.log(sample,sample.length);

            var inputs = filter_cases(sample);
            // console.log(inputs);
            var costs = [];
            for (var i = 0; i < inputs.length; i++) {
                var cost = calculate_cost(inputs[i]);
                costs.push(cost);
            }
            // console.log(costs);
            var outputs = makeOutPut(costs);
            for(var i=0;i<outputs.length;i++)
            {
                console.log(outputs[i]);
            }
            process.exit()
    })
}

readInput()