/*globals Pretender */

import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'embermail', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'embermail');

// START FAKE API SERVER DEFINITION

function jsonify(obj) {
  return JSON.stringify(obj);
}

function response(obj) {
  var responseCode = obj ? 200 : 404;
  return [responseCode, {'Content-Type': 'application/json'}, obj ? jsonify(obj) : ""];
}

window.RouteRecognizer = requireModule('route-recognizer')['default']; // Hack for Pretender

new Pretender(function(){
  this.get('/v1/messages', function(){
    var messages = [];
    for (var i = 1, l = 10; i <= l; i++) {
      messages.push(generateMessage("Message #" + i, "foo@bar.com", ["you@example.com"], "Hello, this is message #" + i));
    }
    return response(messages);
  });

  this.get('/v1/messages/:message_id', function(req) {
    var id = parseInt(req.params.message_id, 10) + 1;

    return response(generateMessage("Message #" + id, "foo@bar.com", ["you@example.com"], "Hello, this is message #" + id));
  });

  this.get('/v2/conversations', function() {
    var conversations = [];
    for (var i = 1, l = 10; i <= l; i++) {
      conversations.push({
        id: conversationGuid++,
        messages: [
          generateMessage("Message #" + i, "foo@bar.com", ["you@example.com"], "Hello, this is message #" + i)
        ]
      });
    }
    return response(conversations);
  });

  this.get('/v2/conversations/:conversation_id', function(req) {
    var id = parseInt(req.params.conversation_id, 10);

    return response({
      id: id,
      messages: [
        generateMessage("Message #" + id, "foo@bar.com", ["you@example.com"], "Hello, this is message #" + id)
      ]
    });
  });


  this.get('/v3/folders', function() {
    var conversations = [];
    for (var i = 1, l = 10; i <= l; i++) {
      conversations.push({
        id: conversationGuid++,
        messages: [
          generateMessage("Message #" + i, "foo@bar.com", ["you@example.com"], "Hello, this is message #" + i)
        ]
      });
    }
    return response([{
      id: 'inbox',
      name: 'Inbox',
      conversations: conversations
    }, {
      id: 'spam',
      name: 'Spam',
      conversations: [
        {
          id: conversationGuid++,
          messages: [generateMessage("This is spam", "some@jerk.com", ["you@example.com"], "Spam spam spam spam")]
        }
      ]
    }]);
  });

  this.get('/v3/folders/:folder_id', function(req) {
    var id = req.params.folder_id;

    var conversations = [];
    for (var i = 1, l = 10; i <= l; i++) {
      conversations.push({
        id: conversationGuid++,
        messages: [
          generateMessage("Message #" + i, "foo@bar.com", ["you@example.com"], "Hello, this is message #" + i)
        ]
      });
    }

    return response({
      id: id,
      name: id, // FIXME
      conversations: conversations
    });
  });

  this.post('/compose', function(req){
    var message = JSON.parse(req.requestBody);
    return response({
      id: conversationGuid++,
      messages: [
        generateMessage(message.subject, "ross@scienceexchange.com", message.to, message.body)
      ]
    });
  });
});

var conversationGuid = 1;
var messageGuid = 1;
function generateMessage(subject, from, to, body) {
  return {
    id: messageGuid++,
    subject: subject,
    from: from,
    to: to,
    time: new Date(),
    body: body
  };
}

export default App;
