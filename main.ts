namespace SpriteKind {
    export const diceroll = SpriteKind.create()
    export const dice = SpriteKind.create()
    export const ds = SpriteKind.create()
}
function solotile (col: number, row: number) {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rolling = false
})
function question () {
    q1 = "27"
    answer2 = game.askForString("3 x 9", 2)
    if (answer2 == q1) {
        rolling = true
    } else {
        game.reset()
    }
}
function tiletgt (spaces: number): any {
    if (spaces == 0) {
        let cpn = 0
        let bp: Image[] = []
        bc = sprites.create(bp[cpn], SpriteKind.Projectile)
    } else {
        if (true) {
            return curentposition
        } else {
            bc.vy = -60
            bc.ay = 100
        }
        return tiletgt(spaces - 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    answer = game.askForNumber("What was the number at the beginning? ", 1)
    if (number == answer) {
        game.splash("You win !")
    } else {
        game.splash("You lose!")
        game.reset()
    }
    info.changeScoreBy(1)
    game.gameOver(true)
})
function foo (space: number) {
    gf = "moving..."
    mySprite.sayText(spaces)
    curentposition = tiles.locationOfSprite(mySprite)
}
sprites.onOverlap(SpriteKind.dice, SpriteKind.ds, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    foo(list.indexOf(die.image))
})
function rolldice () {
    die = sprites.create(img`
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
        `, SpriteKind.dice)
    gf = "dice rolling"
    die.setPosition(80, 101)
}
let gf = ""
let number = 0
let answer = 0
let curentposition: tiles.Location = null
let bc: Sprite = null
let spaces = 0
let answer2 = ""
let q1 = ""
let rolling = false
let die: Sprite = null
let list: Image[] = []
let mySprite: Sprite = null
question()
info.startCountdown(100)
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level5`)
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
let food2 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
controller.moveSprite(mySprite, 100, 100)
list = [
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 f f f 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 1 f f f 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 f f f 1 1 1 1 1 1 1 1 f f f 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 f f f 1 1 1 1 1 1 1 f f f 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
]
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
tiles.placeOnRandomTile(die, assets.tile`myTile7`)
tiles.placeOnRandomTile(food2, assets.tile`myTile3`)
let characters = [mySprite]
scene.cameraFollowSprite(mySprite)
rolldice()
game.onUpdateInterval(500, function () {
    if (rolling) {
        number = randint(0, 5)
        die.setImage(list[number])
    } else {
    	
    }
})
