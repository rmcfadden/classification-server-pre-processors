import { stemmingPreProcessor } from "../src/stemmingPreProcessor";

test("apply", async () => {
    const { apply } = stemmingPreProcessor();
    const result = await apply("going");
    expect(result).toBe("go");
});
