import {
    PreProcessorBase,
    PreProcessorRequest,
    PreProcessorResponse,
} from "classification-server/types";
import { PorterStemmer } from "natural";

export const stemmingPreProcessor = () => {
    const apply = async ({ text }: PreProcessorRequest): Promise<PreProcessorResponse> =>
        ({ text: PorterStemmer.stem(text) } as PreProcessorResponse);
    return { apply, name: "stemming" } as PreProcessorBase;
};
