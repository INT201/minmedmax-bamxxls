const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {

    let max = n1>n2 && n1>n3 ? n1 : n2>n3 ? n2 : n3;
    let min = n3<n2 && n3<n1 ? n3 : n2<n1 ? n2 : n1;
    let mid = n1>=n2&&n1<=n3 || n1>=n3&&n1<=n2 ? n1 : n2>=n1&&n2<=n3 || n2>=n3&&n2<=n1 ? n2 : n3;

    return { min : min, mid: mid, max : max};
}
module.exports = minMedMax
