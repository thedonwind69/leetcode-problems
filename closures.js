function rate () {

    var time = 0;
    function increase () {
        time += 50;
        console.log(time);
    }

    return increase;

}

var boost = rate();
boost();
boost();