// Number: 21
// Title: Merge Two Sorted Lists

/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
	// return empty nodes
	if l1 == nil {
		return l2
	} else if l2 == nil {
		return l1
	}

	// pick the lesser head
	var mergedList, leftNode, rightNode *ListNode
	if l1.Val > l2.Val {
		mergedList = l2
		if l2.Next == nil {
			leftNode = nil
		} else {
			leftNode = l2.Next
		}
		rightNode = l1
	} else {
		mergedList = l1
		if l1.Next == nil {
			leftNode = nil
		} else {
			leftNode = l1.Next
		}
		rightNode = l2
	}

	mergedNode := mergedList
	for leftNode != nil || rightNode != nil {
		// what is the next value in each list?
		// take from left node first
		if leftNode == nil {
			// pull from rightNode
			mergedNode.Next = rightNode
			mergedNode = rightNode
			rightNode = rightNode.Next
		} else if rightNode == nil {
			mergedNode.Next = leftNode
			mergedNode = leftNode
			leftNode = leftNode.Next
		} else if leftNode.Val >= rightNode.Val {
			// note the inclusion in this conditional, >=
			mergedNode.Next = rightNode
			mergedNode = rightNode
			rightNode = rightNode.Next
		} else if leftNode.Val < rightNode.Val {
			mergedNode.Next = leftNode
			mergedNode = leftNode
			leftNode = leftNode.Next
		} else {
			// empty ???
			fmt.Println(leftNode)
			fmt.Println(rightNode)
			fmt.Println(mergedNode)
			panic("We shouldn't be here.")
		}
	}
	return mergedList
}