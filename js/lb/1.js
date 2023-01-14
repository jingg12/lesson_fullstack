function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 1 -> 2-> 3 -> null
const node = new ListNode(1);
node.next = new ListNode(2);

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

var reverseList = function (head, m, n) {
    // 截取
    let pre, cur, leftHead;
    const dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    for(let i = 0; i < m-1; i++) {
        p = p.next;
    }
    leftHead = p;

    // 翻转
    let start = leftHead.next
    pre = start;
    cur = pre.next;
    for(let i = m;i < n; i++) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    // 拼接
    leftHead.next = pre;
    start.next = cur;
    return dummy.next;
};

let n = 0;

while (head != null) {
    head = head.next;
    n++;
}
