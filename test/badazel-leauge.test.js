import { html, fixture, expect } from '@open-wc/testing';
import "../badazel-leauge.js";

describe("BadazelLeauge test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <badazel-leauge
        title="title"
      ></badazel-leauge>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
