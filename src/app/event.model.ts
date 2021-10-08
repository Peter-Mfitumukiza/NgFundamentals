export interface Event{
    id: number
    name: string
    desc: string
    time: string
    location?:{
        province: string
        district: string
        sector: string
    }
}