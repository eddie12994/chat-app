var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Edward';
    var text = 'Some sample message text';

    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from: from,
      text: text
    });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Edward';
    var latitude = 23;
    var longitude = 75;
    var url = 'https://www.google.com/maps?q=23,75';

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});
  });
});
