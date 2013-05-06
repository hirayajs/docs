YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Hiraya.Class",
        "Hiraya.Collection",
        "Hiraya.Emitter",
        "Hiraya.Game"
    ],
    "modules": [
        "hiraya",
        "hiraya-core"
    ],
    "allModules": [
        {
            "displayName": "hiraya",
            "name": "hiraya"
        },
        {
            "displayName": "hiraya-core",
            "name": "hiraya-core",
            "description": "`Hiraya.Emitter` handles event-based callbacks.\nFor example if you wish to create an event manager that dispatches data\neverytime a certain topic is called:\n\n     Game.topicEmitter = Hiraya.Emitter.create({\n       newTopic: function(topic) {\n         this.emit('newTopic', topic);\n       }\n     });\n\n     Game.topicEmitter.on('newTopic', function(topic) {\n       console.log('Got a new topic:', topic);\n     });\n\n     Game.topicEmitter.newTopic('entityCreate');"
        }
    ]
} };
});