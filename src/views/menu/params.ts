interface Menu{
    id:number
    name: string
    child?:Menu[]
}
const menu_1_str = [
    'Vis',
    'Util',
    'Flex',
    'Animate',
    'Query',
]
const menu_2_str = [
    ['Easing','Interpolate','Parallel','Converters','Legend'],
    ['Easing','Interpolate','Parallel','Converters','Legend'],
    ['Easing','Interpolate','Parallel','Converters','Legend'],
    ['Easing','Interpolate','Parallel','Converters','Legend'],
    ['Easing','Interpolate','Parallel','Converters','Legend'],
    ['Easing','Interpolate','Parallel','Converters','Legend'],
]
const menu_3_str = [
    ['Label','Encoder','DataList','Palette','IMatrix'],
    ['Label','Encoder','DataList','Palette','IMatrix'],
    ['Label','Encoder','DataList','Palette','IMatrix'],
    ['Label','Encoder','DataList','Palette','IMatrix'],
    ['Label','Encoder','DataList','Palette','IMatrix'],
]
const menu_3_child = [
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    
]
const mappingHandle = (strArr:string[],level:number)=>{
    const arr = []
    const parentId = 10 ** level-1
    for (let index = 0; index < strArr.length; index++) {
        const element = strArr[index];
        arr.push({
            level:level-1,
            id:parentId+index,
            name:element
        })
    }
    return arr
}
const menu1 = mappingHandle(menu_1_str,1)
const menu2 = mappingHandle(menu_2_str[0],1)
const menu3 = mappingHandle(menu_3_str[0],1)
const menuChild = mappingHandle(menu_3_child[0],1)
export {menu1,menu2,menu3,menuChild}
