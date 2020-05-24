/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let median = nums1.length + nums2.length - 2;
    let useLast = false;

    if( median%2 == 0 ) {
        useLast = true;
    } 

    median = Math.ceil(median/2) + (useLast? 1: 0);

    // console.log(median);
    let oneIndex = 0;
    let twoIndex = 0;

    let medianFound = 0;
    let prev = 0;
    let prevPrev = 0;

    while( oneIndex < nums1.length || twoIndex < nums2.length ) {
        prevPrev = prev;

        if( (oneIndex < nums1.length && nums1[oneIndex] <= nums2[twoIndex]) || twoIndex == nums2.length ) {
            prev = nums1[oneIndex];
            oneIndex++;
        } else if( (twoIndex < nums2.length && nums1[oneIndex] >= nums2[twoIndex]) || oneIndex == nums1.length ) {
            prev = nums2[twoIndex];
            twoIndex++;
        }

        // console.log(oneIndex+twoIndex, median)
        if( oneIndex+twoIndex == median+1 ) {
            medianFound = prev;
            break;
        }
    }

    if( useLast ) {
        medianFound = (medianFound + prevPrev)/2;
    }

    return (medianFound).toFixed(1);
};