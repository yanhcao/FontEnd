
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var line = input.trim();
    console.log(solution_two(line));
});

function solution_two(s) {
    if (!s || !s.length) {
        return 0;
    }
    var max_length = 0, valid_star_pos = 0;
    const stack= [];
    for (let i=0; i<s.length; i++) {
        if(s[i] == '(') {
            stack.push(i);
        } else if(s[i] == ')') {
            if(stack.length == 0) {
                valid_star_pos = i + 1;
            } else {
                stack.pop();
                if(stack.length == 0) {
                    max_length = Math.max(max_length, i - valid_star_pos + 1);
                } else {
                    max_length = Math.max(max_length, i - stack[stack.length - 1])
                }
            }
        } else {
            while(i < s.length && s[i] != '(') {
                ++i;
            }
            if(i < s.length && s[i] == '(') {
                valid_star_pos = i;
                stack.push(i); // 将下标存入
            } else if(i >= s.length){
                return max_length;
            }
        }
    }
    return max_length;
};