import { PreProcessorBase } from "classification-server/types";
import { PorterStemmer } from "natural";

export const stemmingPreProcessor = () => {
    const apply = async (input: string): Promise<string> => PorterStemmer.stem(input);
    return { apply, name: "stemming" } as PreProcessorBase;
};
