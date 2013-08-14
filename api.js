YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Hiraya.Canvas",
        "Hiraya.Class",
        "Hiraya.Collection",
        "Hiraya.Command",
        "Hiraya.Emitter",
        "Hiraya.Entity",
        "Hiraya.Game",
        "Hiraya.GetterSetter",
        "Hiraya.HexagonUtil",
        "Hiraya.Level",
        "Hiraya.LevelTurnBased",
        "Hiraya.Sprite",
        "Hiraya.Stat",
        "Hiraya.Stats",
        "Hiraya.Tile",
        "Hiraya.Tiles",
        "Hiraya.TilesHex"
    ],
    "modules": [
        "hiraya",
        "hiraya-core",
        "hiraya-game",
        "hiraya-util",
        "hiraya-view"
    ],
    "allModules": [
        {
            "displayName": "hiraya",
            "name": "hiraya"
        },
        {
            "displayName": "hiraya-core",
            "name": "hiraya-core",
            "description": "`Hiraya.Class` is the heart of all Hiraya objects. It can be used for prototypal inheritance.\n\n    var Human = Hiraya.Class.extend({\n       baseHealth: 100,\n       baseAttack: 10,\n       health: null,\n       init: function() {\n         this.health = this.baseHealth;\n       },\n       attack: function(enemy) {\n         this.enemy.health -= this.baseAttack;\n       }\n    });\n\n    var Orc = Human.extend({\n       baseHealth: 200,\n       attack: function(enemy) {\n         // class methods have _super methods\n         this._super(enemy);\n         this.shout('waaagh!');\n       },\n       shout: function(message) {\n         alert(message);\n       }\n    });\n\n    var human = Human.create();\n    var Orc = Orc.create();\n\n    // You can also override certain properties on instantiation\n    var superman = Human.create({\n       baseHealth: 10000,\n       baseAttack: 10000\n    });"
        },
        {
            "displayName": "hiraya-game",
            "name": "hiraya-game",
            "description": "A class for creating commands for entities. Use this to construct\nskills, abilities, etc."
        },
        {
            "displayName": "hiraya-util",
            "name": "hiraya-util",
            "description": "A static utility class for laying out hexagonal board games."
        },
        {
            "displayName": "hiraya-view",
            "name": "hiraya-view",
            "description": "Canvas manages the stage and all things happening in them."
        }
    ]
} };
});