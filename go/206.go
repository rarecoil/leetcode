// Number: 206
// Title: Reverse Linked List

/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	var prevNode *ListNode
	prevNode = nil
	currentNode := head
	for currentNode != nil {
		nextRef := currentNode.Next
		currentNode.Next = prevNode
		prevNode = currentNode
		currentNode = nextRef
	}
	return prevNode
}