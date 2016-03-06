test_runner.addTest(
    'getComboVariants_input_length_2',
    crabapple.getComboVariants,
    [[0,1]],
    [[0,1], [0,1], [1,0], [1,0]]
);

test_runner.addTest(
    'getComboVariants_input_length_3',
    crabapple.getComboVariants,
    [[2,1,3]],
    [[1,2,3], [3,1,2], [1,2,3], [2,3,1], [2,1,3], [2,1,3]]
);

test_runner.addTest(
    'isArraySorted min size true',
    crabapple.isArraySorted,
    [[0,1]],
    true
);

test_runner.addTest(
    'is weird array sorted',
    crabapple.isArraySorted,
    [[0,0,2,0]],
    false
);

test_runner.addTest(
    'isArraySorted min size false',
    crabapple.isArraySorted,
    [[1,0]],
    false
);

test_runner.addTest(
    'swappy base caes',
    crabapple.swappy,
    [[1,0], 0, 1],
    [0,1]
);

test_runner.addTest(
    'swappy loop around up',
    crabapple.swappy,
    [[4,7,6,5,3,2,2], 4, 1],
    [3,7,6,5,4,2,2]
);

test_runner.addTest(
    'swappy loop around down',
    crabapple.swappy,
    [[4,7,6,5,3,2,2], 3, -1],
    [4,7,6,2,3,5,2]
);

test_runner.addTest(
    'count permutations all same',
    crabapple.countPermutations,
    [[5,5,5,5,5,5]],
    1
);

test_runner.addTest(
    'count permutations all different',
    crabapple.countPermutations,
    [[1,2,3]],
    6
);

test_runner.addTest(
    'correct permutations tally when some duplication',
    crabapple.countPermutations,
    [[1,2,3,3]],
    12
);

test_runner.addTest(
    'return 0 as moves needed to win from already ordered',
    crabapple.calcMinMoves,
    [[1,2,3]],
    0
);

test_runner.addTest(
    'return -1 as moves needed to win from impossible',
    crabapple.getMinMoves,
    [[0,0,2,0]],
    -1
);

test_runner.addTest(
    'return -1 as moves needed to win from empty set',
    crabapple.getMinMoves,
    [[]],
    -1
);

test_runner.addTest(
    'return 2 as wins needed to move from a 2 off start',
    crabapple.getMinMoves,
    [[0,1,1,0]],
    2
);

test_runner.runTests();