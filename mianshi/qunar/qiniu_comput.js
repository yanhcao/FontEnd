function cal(str) {
    var nums = [];
    var ops = [];
    for(var i = 0; i < str.length; ++i) {
        if(str.charAt(i) < '9' && str.charAt(i) > '0') {
            var n = 0;
            while(i < str.length && str.charAt(i) < '9' && str.charAt(i) > '0') {
                n = n * 10 + parseInt(str.charAt(i));
                i++;
            }
            i--;
            nums.push(n);
        } else if(str.charAt(i) === 'Q' || str.charAt(i) === 'N') {
            ops.push(str.charAt(i));
        } else if(str.charAt(i) === ')') {
            var b = nums.pop();
            var a = nums.pop();
            var op = ops.pop();
            if (op === 'Q') {
                nums.push(a * b - (a + b));
            } else if (op === 'N') {
                nums.push(a * a + b);
            }
        }
    }
    var b = nums.pop();
    var a = nums.pop();
    var op = ops.pop();
    if (op === 'Q') {
        nums.push(a * b - (a + b));
    } else if (op === 'N') {
        nums.push(a * a + b);
    }

    console.log(nums[0]);
}

cal("2Q(3N4)");