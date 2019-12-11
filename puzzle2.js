let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,6,23,1,23,6,27,1,13,27,31,2,13,31,35,1,5,35,39,2,39,13,43,1,10,43,47,2,13,47,51,1,6,51,55,2,55,13,59,1,59,10,63,1,63,10,67,2,10,67,71,1,6,71,75,1,10,75,79,1,79,9,83,2,83,6,87,2,87,9,91,1,5,91,95,1,6,95,99,1,99,9,103,2,10,103,107,1,107,6,111,2,9,111,115,1,5,115,119,1,10,119,123,1,2,123,127,1,127,6,0,99,2,14,0,0];

const run = (input, noun, verb) => {
    const add = 1,
        multi = 2,
        halt = 99,
        memory = [...input];

    memory[1] = noun;
    memory[2] = verb;
    
    let curNdx = 0,
        instruction = memory[curNdx];

    while (instruction !== halt) {
        switch (instruction) {
            case add:
                memory[memory[curNdx + 3]] = memory[memory[curNdx + 1]] + memory[memory[curNdx + 2]];
                break;
            case multi:
                    memory[memory[curNdx + 3]] = memory[memory[curNdx + 1]] * memory[memory[curNdx + 2]];
                break;
            case halt:
                continue;
        }

        curNdx += 4;
        instruction = memory[curNdx];
    }

    return memory[0];

};

const calculatePart2 = () => {
    const resultToCheck = 19690720;
    let noun = 0,
        verb = 0,
        result,
        memory = [...input];

    for (let n = 0; n < 100; n += 1) {
        for (let v = 0; v < 100; v += 1) {
            result = run(memory, n, v);
            if (result === resultToCheck) {
                noun = n;
                verb = v;

                break;
            }
        }
    }

    return 100 * noun + verb;
};

console.log(`Part 1 Result: `, run(input, 12, 2));
console.log(`Part 2 Result: `, calculatePart2());
