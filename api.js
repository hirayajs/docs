YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Hiraya.Class",
        "Hiraya.Collection",
        "Hiraya.Emitter",
        "Hiraya.Game",
        "Hiraya.GetterSetter",
        "Hiraya.Level",
        "Hiraya.LevelTurnBased",
        "Hiraya.Stat",
        "Hiraya.Stats"
    ],
    "modules": [
        "hiraya",
        "hiraya-core",
        "hiraya-game"
    ],
    "allModules": [
        {
            "displayName": "hiraya",
            "name": "hiraya"
        },
        {
            "displayName": "hiraya-core",
            "name": "hiraya-core",
            "description": "`Hiraya.Class` is the heart of all Hiraya objects. It can be used for prototypal inheritance.\n\n    var Human = Hiraya.Class.extend({\n       baseHealth: 100,\n       baseAttack: 10,\n       health: null,\n       init: function() {\n         this.health = this.baseHealth;\n       },\n       attack: function(enemy) {\n         this.enemy.health -= this.baseAttack;\n       }\n    });\n\n    var Orc = Human.extend({\n       baseHealth: 200,\n       attack: function(enemy) {\n         // class methods have super methods\n         this.super(enemy);\n         this.shout('waaagh!');\n       },\n       shout: function(message) {\n         alert(message);\n       }\n    });\n\n    var human = Human.create();\n    var Orc = Orc.create();\n\n    // You can also override certain properties on instantiation\n    var superman = Human.create({\n       baseHealth: 10000,\n       baseAttack: 10000\n    });"
        },
        {
            "displayName": "hiraya-game",
            "name": "hiraya-game",
            "description": "`Hiraya.Game` is the entry point of the framework. Instantiating this will serve as your namespace,\nas well as reference to instantiated objects that the Hiraya framework provides."
        }
    ]
} };
});