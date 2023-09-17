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
const menu_4_str = [
    ['Tween','Converters','FlareVis','Minimum','Arrays'],
    ['Tween','Converters','FlareVis','Minimum','Arrays'],
    ['Tween','Converters','FlareVis','Minimum','Arrays'],
    ['Tween','Converters','FlareVis','Minimum','Arrays'],
    ['Tween','Converters','FlareVis','Minimum','Arrays'],
    ['Tween','Converters','FlareVis','Minimum','Arrays'],
    
]
const menu_5_str = [
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    ['Transitioner','FlareVis','Parallel','Scheduler'],
    
]
const mappingHandle = (strArr:string[],level:number)=>{
    const arr = []
    const parentId = level*10
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



export const menuList:Menu[] = [
    {
        id:1,
        name:'Vis',
        child:[
            {
                id:1.1,
                name:'Easing',
                child:[
                    {
                        id:1.11,
                        name:'Label',
                        child:[
                            {
                                id:1.111,
                                name:'Tween'
                            },
                            {
                                id:1.112,
                                name:'Transitioner'
                            },
                            {
                                id:1.113,
                                name:'FlareVis'
                            },
                            {
                                id:1.114,
                                name:'Parallel'
                            },
                            {
                                id:1.115,
                                name:'Scheduler'
                            },
                        ]
                    },
                    {
                        id:1.12,
                        name:'Encoder',
                        child:[
                            {
                                id:1.121,
                                name:'Converters'
                            },
                            {
                                id:1.122,
                                name:'Orderby'
                            },
                            {
                                id:1.123,
                                name:'DataSource'
                            },
                            {
                                id:1.124,
                                name:'Graph'
                            },
                            {
                                id:1.125,
                                name:'DataUtil'
                            },
                        ]
                    },
                    {
                        id:1.13,
                        name:'DataList'
                    },
                    {
                        id:1.14,
                        name:'Palette'
                    },
                    {
                        id:1.15,
                        name:'IMatrix'
                    },
                ]
            },
            {
                id:1.2,
                name:'Interpolate'
            },
            {
                id:1.3,
                name:'Parallel'
            },
            {
                id:1.4,
                name:'Converters'
            },
            {
                id:1.5,
                name:'Legend'
            },
        ]
    },
    {
        id:2,
        name:'Util',
        child:[]
    },
    {
        id:3,
        name:'Flex',
        child:[]
    },
    {
        id:4,
        name:'Animate',
        child:[]
    },
    {
        id:5,
        name:'Query',
        child:[]
    },
]