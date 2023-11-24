import {
    PreProcessorBase,
    PreProcessorRequest,
    PreProcessorResponse,
} from "classification-server/types";

export const nGramsPrePreProcessor = (options?: Map<string, string>) => {
    const apply = async ({ text }: PreProcessorRequest): Promise<PreProcessorResponse> => {
        const optionsNum = options?.get("number");
        const num = optionsNum && parseInt(optionsNum) ? parseInt(optionsNum) : 2;
        const seperator = options?.get("seperator") ?? ",";
        const inputs = text.split(seperator);
        const sliced = inputs.map((_, i) =>
            i > inputs.length - num ? undefined : [...inputs].slice(i, i + num)
        );
        return {
            text: sliced
                .filter((n): n is string[] => !!n)
                .reduce((a, c) => [...a, `[${c.join(seperator)}]`], [])
                .join(","),
        } as PreProcessorResponse;
    };
    return { apply, name: "nGramsPreprocessor" } as PreProcessorBase;
};
