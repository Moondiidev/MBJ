export interface skillsInterface {
    data: Array<{ name: string, experienceLevel: string }>,
    //Used to provide correct index even when elements are removed from the middle and array looks off like [0,3,5], 1st,2nd,4th elements were deleted --> [0,1,2] 
    sorter: Array<number>
}