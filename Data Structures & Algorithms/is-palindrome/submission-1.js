class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let left = 0;
        let right = cleanStr.length-1
        
        while(left<right){
            // while(left<right && !this.isAlphaNo(s[left])) left++;
            // while(left<right && !this.isAlphaNo(s[right])) right--;

            if(cleanStr[left]!== cleanStr[right]) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }

    // isAlphaNo(s){
    //    return /^[a-z0-9]$/i.test(s)
    // }
}
