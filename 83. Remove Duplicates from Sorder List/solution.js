/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    /*
        Runtime: 62ms (Beats 48.63%)
        Memory: 43.75 MB (Beats 83.75%)
    */
    if(head === null) return null;
    if(head.next === null) return head;

    let pointer = head.next;

    let newPointer = head;
    let newPointerStart = newPointer;

    while(pointer !== null) {
        if(newPointer.val !== pointer.val) {
            newPointer.next = pointer;
            newPointer = newPointer.next;
        }
        pointer = pointer.next;
    }
    newPointer.next = null;

    return newPointerStart;
};