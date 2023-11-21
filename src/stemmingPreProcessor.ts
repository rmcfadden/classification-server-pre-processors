import { PreProcessorBase } from "classification-server/types";

// TODO: implement this
export const stemmingPreProcessor = () => {
    const apply = async (input: string): Promise<string> => "";
    return { apply, name: "stemming" } as PreProcessorBase;
};
