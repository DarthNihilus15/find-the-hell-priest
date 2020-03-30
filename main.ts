namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true, effects.confetti)
})
info.onCountdownEnd(function () {
    game.over(false, effects.splatter)
})
let Doom_Slayer = sprites.create(img`
. . . . . 2 2 2 2 . . . . . 
. . . 2 2 2 7 7 2 2 2 . . . 
. . 2 2 7 7 7 7 7 7 2 2 . . 
. 2 2 7 7 7 7 7 7 7 7 2 2 . 
. 2 7 7 7 7 7 7 7 7 7 7 2 . 
. 2 7 7 f f f f f f 7 7 2 . 
. 2 7 f f f f f f f f 7 2 . 
2 2 7 f f f f f f f f 7 2 2 
2 2 7 7 f f f f f f 7 7 2 2 
. 2 2 7 f f f f f f 7 2 2 . 
. . 2 7 7 7 7 7 7 7 7 2 . . 
. 2 2 7 7 7 7 7 7 7 7 2 2 . 
. 2 7 7 7 7 7 7 7 7 7 7 2 . 
. 2 2 2 2 7 7 7 7 2 2 2 2 . 
. . . . 2 2 2 2 2 2 . . . . 
. . . . 2 2 . . 2 2 . . . . 
`, SpriteKind.Player)
controller.moveSprite(Doom_Slayer)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100009180e080808080e08080808080e08070a0505050516050605050505050505061105160505160506050505050505050f0a0516050516050605050509080705060a050808081605050505050a050605060a0505050505050608080808050605060a0505050516050605050505050505060a0808080808050808080808070505061105050505050505050505050605050f0a0505050505050505050505060505060a0808080808080808080508070505060a0505050505050505050505060505060a050505090808080808080506050506110505050a050505050505050e08080f0a0505050a05050505050505050505060b0c100c0c0c0c100c0c0c0c0c10120d`,
            img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . 2 . . . . . . . 2 
2 . 2 . . 2 . 2 . . . . . . . 2 
2 . 2 . . 2 . 2 . . . 2 2 2 . 2 
2 . 2 2 2 2 . . . . . 2 . 2 . 2 
2 . . . . . . 2 2 2 2 2 . 2 . 2 
2 . . . . 2 . 2 . . . . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . 2 2 2 2 2 2 2 . 2 . . 2 
2 . . . 2 . . . . . . . 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.castle.tilePath2,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundCenter,myTiles.tile1,sprites.dungeon.floorLight5,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.stairNorth,sprites.dungeon.stairSouth,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterWest1,myTiles.tile2,sprites.dungeon.stairLadder],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(Doom_Slayer, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(Doom_Slayer)
info.startCountdown(10)
