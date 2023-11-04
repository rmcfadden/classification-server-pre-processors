import { PreProcessorBase } from "classification-server/types";

// TODO: implement this

export const nGramsPrePreProcessor = () => {
    const replaceTexts = [".", "?", ":", "!", ",", "\\", "/", '"', "'", " "];
    const apply = async (input: string): Promise<string> =>
        input !== undefined && input !== null
            ? replaceTexts.reduce((a: string, c: string) => a.replaceAll(c, ""), input)
            : input;
    return { apply, name: "textNoise" } as PreProcessorBase;
};
