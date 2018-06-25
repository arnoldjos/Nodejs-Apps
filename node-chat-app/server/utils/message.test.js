const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');


describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        const msg = {
            from: 'Sample',
            text: 'Wewewew'
        };
        const generatedMsg = generateMessage(msg.from, msg.text);
        expect(generatedMsg).toMatchObject({from: msg.from, text: msg.text});
        expect(typeof generatedMsg.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const msg = {
            from: 'Sample',
            lat: 35.652832,
            lng: 139.839478
        }
        const locationMsg = generateLocationMessage('Admin', msg.lat, msg.lng);
        expect(typeof locationMsg.createdAt).toBe('number');
        expect(locationMsg.url).toMatch(`${msg.lat},${msg.lng}`);
    });
});