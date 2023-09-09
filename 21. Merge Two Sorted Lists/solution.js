/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    
    let pointer1 = list1;
    let pointer2 = list2;

    let newNode = new ListNode(0, null);
    let pointerResult = newNode;

    while(pointer1 && pointer2) {
        if(pointer1.val < pointer2.val) {
            pointerResult.next = pointer1
            pointer1 = pointer1.next;
        }
        else {
            pointerResult.next = pointer2
            pointer2 = pointer2.next;
        }
        pointerResult = pointerResult.next;
    }

    pointerResult.next = pointer1 || pointer2;

    return newNode.next;

    // if(!list1) return list2;
    // if(!list2) return list1;

    // let pointer1 = list1;
    // let pointer2 = list2;
    // let newNode = null;
    // if(pointer1.val < pointer2.val) {
    //     newNode = new ListNode(pointer1.val, pointer1);
    //     pointer1 = pointer1.next;
    // }
    // else {
    //     newNode = new ListNode(pointer2.val, pointer2);
    //     pointer2 = pointer2.next;
    // }
    // let pointerResult = newNode;

    // while(pointer1 && pointer2) {
    //     if(pointer1.val < pointer2.val) {
    //         pointerResult.next = pointer1;
    //         pointerResult = pointer1;
    //         pointer1 = pointer1.next;
    //     }
    //     else {
    //         pointerResult.next = pointer2;
    //         pointerResult = pointer2;
    //         pointer2 = pointer2.next;
    //     }
    // }

    // if(!pointer1) pointerResult.next = pointer2;
    // if(!pointer2) pointerResult.next = pointer1;

    // return newNode;
};