var qs = 'banana=10&apple=20&orange=30';

function parse(qs){
    var queryString = qs.substr(1);
    var chunks = qs.split("&");
    var result = {};

    for(var i=0; i<chunks.length; i++){
        var parts = chunks[i].split("=");
        var key = parts[0];
//        var value = parts[1];
        var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    }

    return result;
}

console.log(parse(qs));