// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002040101020202020202020202020202020101010202020202010101020202020202010101020202020101020202020202020201010202020201010202010101020202010102010101050101020101020202010101020101020202010201010202020201010201010202020101010102020202010102020202010101010101020202020101020202010105010201010202020201010101010101020202010102020202010101050101010102020101020202020101020101020101020201010202020201010202020201010202010102020201010202020202010102020101010202010202020202020101020201010302020202020202020202020202020202`, img`
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 2 2 . . . 2 2 2 2 
2 2 . . . 2 2 2 2 . . 2 2 2 2 2 
2 2 2 . . 2 2 2 2 . . 2 2 . . . 
2 2 2 . . 2 . . . . . . 2 . . 2 
2 2 . . . 2 . . 2 2 2 . 2 . . 2 
2 2 2 . . 2 . . 2 2 2 . . . . 2 
2 2 2 . . 2 2 2 2 . . . . . . 2 
2 2 2 . . 2 2 2 . . . . 2 . . 2 
2 2 2 . . . . . . . 2 2 2 . . 2 
2 2 2 . . . . . . . . 2 2 . . 2 
2 2 2 . . 2 . . 2 . . 2 2 . . 2 
2 2 2 . . 2 2 2 2 . . 2 2 . . 2 
2 2 . . 2 2 2 2 2 . . 2 2 . . . 
2 2 . 2 2 2 2 2 2 . . 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.coral5,myTiles.tile5,myTiles.tile6,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
