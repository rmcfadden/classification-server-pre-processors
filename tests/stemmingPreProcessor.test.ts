import { stemmingPreProcessor } from "../src/stemmingPreProcessor";
import { PreProcessorRequest } from "classification-server/types";

test("apply", async () => {
    const { apply } = stemmingPreProcessor();
    const { text: result } = await apply({ text: "going" } as PreProcessorRequest);
    expect(result).toBe("go");
});
