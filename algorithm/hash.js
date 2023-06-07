// 面试题3： 哈希表 - 快速取值 & 快速匹配定位

// 输入string
const romanToInt = function(s) {
    let len = s.length;
    let max = 0;
    let res = 0;

    while(len--) {
      let num = MAP[s[len]];
      
      if(max > num) {
        res -= num;
        continue;
      };
      max = num;
      res += num;
    }
    // 输出number
    return res;
}