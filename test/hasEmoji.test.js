import expect from 'expect.js';

import { hasEmoji } from '../src/index';

describe('判断是否包含emoji表情', function() {
  it('包含emoji表情的情况', function () {
    expect(hasEmoji('Unicorn 🦄')).to.be.ok();
  });
  it('不包含emoji表情的情况', function () {
    expect(hasEmoji('Unicorn')).to.not.be.ok();
  });
});
