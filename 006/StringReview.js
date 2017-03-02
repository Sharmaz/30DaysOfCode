function processData(input) {
    //Enter your code here
    var S = input.split("\n");
    var N = S.length;
    
    for (var i = 1; i < N; i++) {

      var par = "";
      var non = "";

      for (var j = 0; j < S[i].length; j++) {

        if ((j % 2) != 0) {
          par += S[i].charAt(j);
         }
        else {
          non += S[i].charAt(j);
        }

      }
      console.log(non + " " + par)
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
