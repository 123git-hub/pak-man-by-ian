// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000309090909090909090909090909090602000000000000000000000000000a070200000000000000000000000000000702010100000100000000000000000007020001000001010101010101000000070200010000000000000000010101010702000100000000000000000000000007020001010101000001000000000000070200000000000000010101010100000702000000000000000000000001000007020000000000000000000000010000070200000000000000000000000100000702000000000000010100000101000007020000010101010100000000000000070200000000000000000000000000000704080808080808080808080808080805`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 . . 2 . . . . . . . . . 2 
2 . 2 . . 2 2 2 2 2 2 2 . . . 2 
2 . 2 . . . . . . . . 2 2 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 . . 2 . . . . . . 2 
2 . . . . . . . 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . 2 2 . . 2 2 . . 2 
2 . . 2 2 2 2 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
