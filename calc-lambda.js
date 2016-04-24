'use strict';
console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log(event)
    
    function Calc(num){

        var objToReturn = {total: num || 0};
        // objToReturn.total = 0;

        objToReturn.value = function(){
            return this.total;
        }

        objToReturn.add = function(num){
            this.total += num;
        }

        objToReturn.subtract = function(num){
            this.total -= num;
        }


        return objToReturn;
    }

    var calc = new Calc(event.total);

    calc[event.action](event.value);
    var result = calc.value();
    callback(null, result)
};