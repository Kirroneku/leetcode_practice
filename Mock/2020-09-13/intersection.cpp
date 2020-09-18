/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        set<ListNode *> bSet;
        
        while( headB != NULL ) {
            bSet.insert(headB);
            headB = headB->next;
        }
        
        while( headA != NULL ) {
            if( bSet.count(headA) != 0 ) {
                return headA;
            }
            headA = headA->next;
        }
        
        return NULL;
        
    }
};