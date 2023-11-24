import { nGramsPrePreProcessor } from "../src/nGramsPrePreProcessor";
import { PreProcessorRequest } from "classification-server/types";

test("apply", async () => {
    const { apply } = nGramsPrePreProcessor();
    const { text: result } = await apply({ text: "a,b,c,d,e" });
    expect(result).toBe("[a,b],[b,c],[c,d],[d,e]");
});

test("apply with options", async () => {
    const { apply } = nGramsPrePreProcessor(
        new Map<string, string>([
            ["number", "3"],
            ["seperator", "<->"],
        ])
    );
    const { text: result } = await apply({ text: "0<->1<->2<->3<->4" } as PreProcessorRequest);
    expect(result).toBe("[0<->1<->2],[1<->2<->3],[2<->3<->4]");
});
