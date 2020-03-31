function compareString (before, after) { // 传入两个比较的字符串
    if (typeof before !== 'string' || typeof after !== 'string') {
        console.error('请传入字符串类型');
        return;
    }
    if (before === after) return '完全一致';
    else return '两个字符串不同';
}

export default compareString