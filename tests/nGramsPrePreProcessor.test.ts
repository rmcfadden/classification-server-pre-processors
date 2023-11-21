import { nGramsPrePreProcessor } from "../src/nGramsPrePreProcessor"

test("apply", async () => {
    const { apply } = nGramsPrePreProcessor();
    const result = await apply('a,b,c,d,e');
    expect(result).toBe('[a,b],[b,c],[c,d],[d,e]');
});

test("apply with options", async () => {
    const { apply } = nGramsPrePreProcessor(new Map<string, string>([["number", "3"], ["seperator", "<->"]]));
    const result = await apply('0<->1<->2<->3<->4');
    expect(result).toBe('[0<->1<->2],[1<->2<->3],[2<->3<->4]');
});