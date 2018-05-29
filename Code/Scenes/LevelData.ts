export { Chunk1, Chunk2, Chunk3, Chunk4, Chunk4a, Chunk4b, Chunk5, TallBrickWall, Chunk6, Chunk6a, Chunk1Secret, Chunk4bSecret, DeathFloorChunk, FinalChunk }

let Chunk1 =
{
    X:20,
    Y:12,
    Tiles:
    [
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:3,S:2,C:0,O:0},  null,
        null,               null,               null,               {T:3,S:-2,C:0,O:0}, null,               null,               null,               null,               null,               {T:5,S:-2,C:0,O:0}, null,               null,               null,               null,               null,               null,               null,               null,               {T:14,S:2,C:0,O:0}, {T:2,S:1,C:2,O:0},
        null,               null,               null,               {T:11,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:2,S:0,C:0,O:0},  null,               null,               {T:0,S:0,C:0,O:0},  {T:2,S:0,C:0,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0},  null,
        null,               null,               null,               {T:4,S:0,C:0,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:0,S:-2,C:0,O:0}, null,               null,               null,               null,               {T:4,S:2,C:0,O:0},  null,
        null,               null,               null,               {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               {T:11,S:2,C:0,O:0}, {T:1,S:2,C:0,O:0},  {T:2,S:2,C:0,O:0},  {T:0,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, {T:0,S:2,C:0,O:0},  {T:6,S:2,C:0,O:0},  {T:2,S:1,C:0,O:0},
        null,               null,               null,               {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0},  {T:0,S:-1,C:0,O:0}, {T:1,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, {T:4,S:2,C:0,O:0},  null,
        {T:0,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:6,S:0,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:2,S:1,C:0,O:0},  null,               null,               null,               {T:0,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:15,S:2,C:0,O:0}, {T:3,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, {T:14,S:2,C:0,O:0}, {T:1,S:1,C:0,O:0},
        null,               null,               null,               {T:4,S:0,C:0,O:0},  null,               {T:4,S:-2,C:0,O:0},  null,               null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0},  {T:3,S:-1,C:0,O:0}, {T:5,S:-1,C:0,O:0}, {T:0,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:15,S:2,C:0,O:0}, null,
        null,               null,               null,               {T:14,S:0,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:10,S:1,C:0,O:0}, null,               null,               null,               null,               {T:4,S:2,C:0,O:0},  {T:3,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:1,S:-1,C:0,O:0}, {T:1,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, {T:4,S:2,C:0,O:0},  null,
        null,               null,               null,               {T:4,S:0,C:0,O:0},  null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               {T:11,S:1,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:15,S:2,C:0,O:0}, {T:3,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, null,
        null,               null,               null,               {T:4,S:0,C:0,O:0},  null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               {T:4,S:1,C:0,O:0},  null,               {T:4,S:2,C:0,O:0},  {T:6,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, null,
        null,               null,               null,               {T:9,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:13,S:2,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:2,S:1,C:0,O:0},
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}

let Chunk1Secret =
{
    X:8,
    Y:6,
    Tiles:
    [
        {T:3,S:0,C:0,O:0},  {T:0,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, null,               null,               null,               null,               null,               
        {T:4,S:0,C:0,O:0},  {T:3,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, null,               null,               null,               null,               
        {T:4,S:0,C:0,O:0},  {T:6,S:-1,C:0,O:0}, {T:7,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, null,               null,               null,               null,               
        {T:9,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:2,S:0,C:0,O:0},  null,               null,               null,               null,               
        null,               null,               null,               null,               null,               null,               null,               null,              
        null,               null,               null,               null,               null,               null,               {T:0,S:0,C:6,O:0},  {T:2,S:0,C:6,O:0},              
    ],
    Powers:[],
    Secrets:
    [
        {X:1,Y:2}
    ],
    Enemies:[]
}

let Chunk2 =
{
    X:15,
    Y:12,
    Tiles:
    [
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               null,               {T:7,S:-2,C:0,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,
        null,               null,               {T:0,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               null,               null,               {T:14,S:0,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:2,S:1,C:0,O:0},  null,               null,               null,               {T:0,S:1,C:2,O:0},  {T:2,S:1,C:2,O:0},  null,
        {T:4,S:-2,C:0,O:0}, null,               null,               null,               null,               null,               {T:14,S:0,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:2,S:1,C:0,O:0},  null,               null,               null,               null,               null,
        {T:1,S:1,C:0,O:0},  {T:2,S:1,C:0,O:0},  null,               null,               null,               null,               {T:4,S:0,C:0,O:0},  null,               null,               null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               {T:11,S:1,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:6,S:0,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:10,S:1,C:0,O:0}, null,               null,               null,               null,
        null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               {T:4,S:0,C:0,O:0},  null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               null,               null,
        null,               null,               {T:11,S:1,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:6,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:15,S:0,C:0,O:0}, null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               {T:3,S:0,C:0,O:0},  null,               null,
        null,               null,               {T:4,S:1,C:0,O:0},  null,               {T:4,S:1,C:0,O:0},  null,               {T:4,S:0,C:0,O:0},  null,               null,               {T:6,S:-2,C:0,O:0}, {T:4,S:1,C:0,O:0},  null,               {T:4,S:0,C:0,O:0},  {T:8,S:-2,C:0,O:0}, null,
        null,               {T:0,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:8,S:0,C:0,O:0},  null,               {T:0,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}

let Chunk3 = 
{
    X:10,
    Y:12,
    Tiles:
    [
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,
        null,               {T:4,S:-2,C:0,O:0}, null,               null,               null,               null,               {T:3,S:3,C:0,O:0},  null,               null,               null,
        null,               {T:0,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:2,S:1,C:0,O:0},  null,               null,               {T:14,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:12,S:3,C:0,O:0}, 
        null,               null,               null,               null,               null,               null,               {T:4,S:3,C:0,O:0},  {T:0,S:-1,C:0,O:0}, {T:2,S:-1,C:0,O:0}, {T:4,S:3,C:0,O:0}, 
        null,               null,               null,               null,               {T:2,S:-2,C:0,O:0},  null,               {T:4,S:3,C:0,O:0},  {T:3,S:-1,C:0,O:0}, {T:5,S:-1,C:0,O:0}, {T:4,S:3,C:0,O:0}, 
        null,               null,               null,               null,               {T:11,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:8,S:3,C:0,O:0},  {T:3,S:-1,C:0,O:0}, {T:5,S:-1,C:0,O:0}, {T:4,S:3,C:0,O:0}, 
        null,               null,               null,               null,               {T:4,S:3,C:0,O:0},  {T:0,S:-1,C:0,O:0}, {T:1,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, {T:4,S:3,C:0,O:0}, 
        null,               null,               null,               null,               {T:5,S:3,C:0,O:0},  {T:3,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, {T:11,S:3,C:0,O:0}, {T:15,S:3,C:0,O:0}, 
        null,               null,               null,               null,               {T:0,S:-1,C:0,O:0}, {T:4,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, {T:11,S:3,C:0,O:0}, {T:13,S:3,C:0,O:0}, {T:15,S:3,C:0,O:0}, 
        null,               null,               null,               null,               {T:6,S:-1,C:0,O:0}, {T:8,S:-1,C:0,O:0}, {T:11,S:3,C:0,O:0}, {T:15,S:3,C:0,O:0}, {T:9,S:-1,C:0,O:0}, {T:4,S:3,C:0,O:0},  
        {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:13,S:3,C:0,O:0}, {T:13,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:8,S:3,C:0,O:0},
    ],
    Powers:
    [
        {X:8,Y:5,C:2}
    ],
    Secrets:[],
    Enemies:[]
}

let Chunk4 =
{
    X:16,
    Y:5,
    Tiles:
    [
        null,               null,               {T:11,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:12,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:12,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:10,S:3,C:0,O:0}, null,               null,
        null,               null,               {T:4,S:3,C:1,O:0},  null,               {T:4,S:3,C:2,O:0},  null,               null,               null,               null,               null,               null,               {T:4,S:3,C:2,O:0},  null,               {T:4,S:3,C:1,O:0},  null,               null,
        null,               null,               {T:4,S:3,C:1,O:0},  null,               {T:4,S:3,C:2,O:0},  null,               null,               null,               null,               null,               null,               {T:4,S:3,C:2,O:0},  null,               {T:4,S:3,C:1,O:0},  null,               null,
        null,               null,               {T:4,S:3,C:1,O:0},  null,               {T:4,S:3,C:2,O:0},  null,               null,               null,               {T:2,S:-2,C:0,O:0}, null,               null,               {T:4,S:3,C:2,O:0},  null,               {T:4,S:3,C:1,O:0},  null,               null,
        {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:13,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:13,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:1,S:3,C:2,O:0},  {T:1,S:3,C:2,O:0},  {T:1,S:3,C:2,O:0},  {T:1,S:3,C:2,O:0},  {T:1,S:3,C:0,O:0},  {T:13,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:13,S:3,C:0,O:0}, {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}

let Chunk4a =
{
    X:10,
    Y:11,
    Tiles:
    [
        {T:1,S:3,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:12,S:3,C:0,O:0}, {T:12,S:0,C:0,O:0}, {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               null,               
        null,               null,               {T:14,S:0,C:0,O:0}, {T:6,S:0,C:0,O:0},  {T:15,S:0,C:0,O:0}, null,               null,               null,               null,               null,               
        null,               null,               {T:9,S:0,C:0,O:0},  {T:15,S:0,C:0,O:0}, {T:4,S:1,C:0,O:0},  null,               null,               {T:11,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},                
        null,               null,               null,               {T:9,S:0,C:0,O:0},  {T:8,S:1,C:0,O:0},  null,               null,               {T:14,S:0,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},            
        null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        null,               null,               null,               null,               null,               null,               null,               {T:5,S:1,C:0,O:0},  null,               null,               
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}

let Chunk4b =
{
    X:13,
    Y:10,
    Tiles:
    [
        {T:11,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:13,S:0,C:0,O:0}, {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0},
        {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:0,C:1,O:0},
        {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:0,C:1,O:0},
        {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:0,C:1,O:0},
        {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:0,C:1,O:0},
        {T:4,S:0,C:1,O:0},  null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:0,C:1,O:0},
        {T:4,S:0,C:1,O:0},  null,               {T:11,S:1,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:10,S:1,C:0,O:0}, null,               {T:4,S:0,C:1,O:0},
        {T:8,S:0,C:0,O:0},  {T:11,S:1,C:0,O:0}, {T:8,S:1,C:0,O:0},  null,               null,               null,               null,               null,               null,               null,               {T:9,S:1,C:0,O:0},  {T:10,S:1,C:0,O:0}, {T:14,S:0,C:0,O:0},
        {T:1,S:1,C:0,O:0},  {T:13,S:1,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:13,S:1,C:0,O:0}, {T:8,S:1,C:0,O:0},
    ],
    Powers:[],
    Secrets:
    [
        {X:9,Y:7}
    ],
    Enemies:
    [
        {X:8,Y:5}
    ]
}

let Chunk4bSecret = 
{
    X:3,
    Y:2,
    Tiles:
    [
        null,               {T:3,S:3,C:0,O:0},  null,               
        {T:11,S:3,C:0,O:0}, {T:6,S:3,C:0,O:0},  {T:10,S:3,C:0,O:0},                
    ],
    Powers:[],
    Secrets:
    [
        {X:1,Y:-1}
    ],
    Enemies:[]
}

let Chunk5 = 
{
    X:15,
    Y:20,
    Tiles:
    [
        null,               null,               {T:7,S:0,C:0,O:0},  null,               null,               null,               {T:11,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               null,               null,               {T:4,S:1,C:0,O:0},  null,               {T:4,S:1,C:0,O:0},  null,               null,               null,               null,               null,               null,
        null,               null,               null,               null,               null,               null,               {T:9,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:8,S:1,C:0,O:0},  null,               {T:7,S:0,C:0,O:0},  {T:3,S:1,C:2,O:0},  {T:7,S:0,C:0,O:0},  null,               null,
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               {T:0,S:0,C:0,O:0},  
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               null,               {T:0,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  
        {T:14,S:0,C:0,O:0}, {T:12,S:0,C:0,O:0}, {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:12,S:1,C:2,O:0}, {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:2,O:0},
        {T:4,S:0,C:0,O:0},  {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:4,S:0,C:0,O:0},  null,               {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, {T:5,S:-2,C:0,O:0}, null,               null,               null,               {T:0,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:6,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  
        {T:4,S:0,C:0,O:0},  null,               null,               {T:14,S:0,C:0,O:0}, {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:4,S:0,C:0,O:0},  null,               null,               {T:4,S:1,C:0,O:0},  {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, {T:3,S:-2,C:0,O:0}, null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:4,S:0,C:0,O:0},  null,               null,               {T:4,S:1,C:0,O:0},  null,               {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:14,S:0,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:8,S:1,C:0,O:0},  null,               null,               {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:4,S:0,C:0,O:0},  null,               null,               null,               null,               null,               null,               {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               null,               {T:4,S:1,C:2,O:0},  null,               null,               null,
        {T:4,S:0,C:0,O:0},  null,               null,               null,               null,               null,               null,               null,               {T:9,S:0,C:0,O:0},  {T:10,S:0,C:0,O:0}, null,               {T:4,S:1,C:2,O:0},  null,               null,               {T:11,S:1,C:2,O:0},
        {T:9,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, null,               {T:5,S:1,C:2,O:0},  null,               {T:0,S:1,C:2,O:0},  {T:8,S:1,C:2,O:0},
    ],
    Powers:
    [
        {X:7,Y:-1,C:4}
    ],
    Secrets:[],
    Enemies:[]
}

let TallBrickWall =
{
    X:1,
    Y:10,
    Tiles:
    [
        {T:3,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}, {T:4,S:2,C:0,O:0}
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}

let Chunk6 =
{
    X:7,
    Y:14,
    Tiles:
    [
        {T:14,S:2,C:0,O:0}, {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},
        {T:4,S:2,C:0,O:0},  null,               null,               null,               null,               null,               null, 
        {T:15,S:2,C:0,O:0}, null,               null,               null,               null,               null,               null,
        {T:4,S:2,C:0,O:0},  null,               null,               null,               null,               null,               null,
        {T:6,S:2,C:0,O:0},  null,               null,               null,               null,               null,               null,
        {T:15,S:2,C:6,O:0}, null,               null,               null,               null,               null,               null,
        {T:4,S:2,C:6,O:0},  null,               null,               {T:0,S:-2,C:0,O:0}, null,               null,               null,
        {T:6,S:2,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:1,S:1,C:6,O:0},  {T:1,S:1,C:2,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:6,O:0},  {T:1,S:1,C:2,O:0},
        {T:4,S:2,C:4,O:0},  null,               null,               null,               null,               null,               null,
        {T:4,S:2,C:4,O:0},  null,               null,               null,               null,               null,               null,
        {T:4,S:2,C:4,O:0},  null,               null,               null,               null,               null,               null,
        {T:4,S:2,C:4,O:0},  null,               {T:1,S:-2,C:0,O:0}, null,               null,               {T:5,S:-2,C:0,O:0}, null,
        {T:14,S:2,C:0,O:0}, {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:10,S:2,C:0,O:0},  
        {T:8,S:2,C:0,O:0},  null,               null,               null,               null,               null,               {T:9,S:2,C:0,O:0},
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}

let Chunk6a =
{
    X:10,
    Y:14,
    Tiles:
    [
        {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:15,S:2,C:0,O:0},
        null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0}, 
        null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0}, 
        {T:3,S:2,C:2,O:0},  null,               null,               {T:3,S:2,C:6,O:0},  null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0}, 
        {T:4,S:2,C:2,O:0},  null,               null,               {T:4,S:2,C:6,O:0},  null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0},  
        {T:5,S:2,C:2,O:0},  null,               null,               {T:5,S:2,C:6,O:0},  null,               null,               null,               null,               null,               {T:4,S:2,C:0,O:0}, 
        null,               null,               {T:7,S:2,C:4,O:0},  null,               null,               {T:7,S:2,C:2,O:0},  null,               null,               null,               {T:4,S:2,C:0,O:0}, 
        null,               null,               null,               null,               null,               null,               null,               {T:0,S:2,C:0,O:0},  {T:1,S:2,C:0,O:0},  {T:8,S:2,C:0,O:0},  
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null, 
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null, 
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null, 
        null,               null,               null,               null,               null,               null,               null,               null,               null,               null, 
        null,               null,               null,               null,               null,               null,               null,               null,               null,               {T:11,S:2,C:0,O:0},   
        {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:1,S:1,C:4,O:0},  {T:8,S:2,C:0,O:0},  
    ],
    Powers:[],
    Secrets:
    [
        {X:8, Y:6}
    ],
    Enemies:[]
}

let FinalChunk =
{
    X:3,
    Y:3,
    Tiles:
    [
        null,               null,               null,               
        null,               null,               {T:3,S:3,C:0,O:0},               
        {T:1,S:2,C:0,O:0},  {T:1,S:3,C:0,O:0},  {T:8,S:3,C:0,O:0},                 
    ],
    Powers:[
        {X:2,Y:0,C:-1}
    ],
    Secrets:[],
    Enemies:[]
}


let DeathFloorChunk =
{
    X:8,
    Y:3,
    Tiles:
    [
        null,               null,               {T:11,S:1,C:0,O:0}, {T:1,S:1,C:0,O:0},  {T:1,S:1,C:0,O:0},  {T:10,S:1,C:0,O:0}, null,               null,               
        null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               {T:4,S:1,C:0,O:0},  null,               null,               
        {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},  {T:13,S:0,C:0,O:0}, {T:1,S:0,C:0,O:0},  {T:1,S:0,C:0,O:0},             
    ],
    Powers:[],
    Secrets:[],
    Enemies:[]
}