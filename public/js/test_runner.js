var test_runner = (function(){

    var test_runner = {};
    var tests = [];

    test_runner.addTest = function(test_name, func, args, expected_response){
        var test = {};
        test.test_name = test_name;
        test.func = func;
        test.args = args;
        test.expected_response = expected_response;
        tests.push(test);
    }

    test_runner.runTests = function(){

        console.log('STARTING TESTS');
        console.log(' ');

        for(var i = 0; i<tests.length; i++){
            var test = tests[i];
            runTest(test);
        }
    }

    function runTest(test){

        var actual_response = JSON.stringify(test.func.apply(this, test.args));
        expected_response = JSON.stringify(test.expected_response);
        var is_passed = (actual_response === expected_response);
        console.log(test.test_name + "... " + (is_passed ? 'passed' : 'failed'));
        if(!is_passed){
            console.log('  input: ', JSON.stringify(test.args));
            console.log('  expected: ', expected_response);
            console.log('  delivered: ', actual_response);
        }
    }

    return test_runner;
})();
