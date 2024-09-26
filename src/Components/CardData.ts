import RefPathData from "../RefPathData";

export default interface CardData extends RefPathData
{
    title : string
    year : number
    content : string
    difficulty : number
    time : number
}