    var reverseBetween = function(head, left, right) {
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;//虚拟头节点
    let pre = dummy_node;
    for (let i = 0; i < left - 1; ++i) {//pre前进到left的前一个节点
        pre = pre.next;
    }

    let cur = pre.next;
    for (let i = 0; i < right - left; ++i) {//循环right - left次 反转中间的节点
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;//返回虚拟头节点的next
};

console.log(reverseBetween([5,4,3,6],3,4));