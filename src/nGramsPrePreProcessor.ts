import { PreProcessorBase } from "classification-server/types";

export const nGramsPrePreProcessor = (options?: Map<string, string>) => {
    const apply = async (input: string): Promise<string> => {
        const optionsNum = options?.get("number");
        const num = optionsNum && parseInt(optionsNum) ? parseInt(optionsNum) : 2;
        const seperator = options?.get("seperator") ?? ',';
        const inputs = input.split(seperator);
        const sliced = inputs.map((_, i) => i > inputs.length - num
            ? undefined : ([...inputs].slice(i, i + num))
        );
        return sliced.filter((n): n is string[] => !!n)
            .reduce((a, c) => ([...a, `[${c.join(seperator)}]`]), [])
            .join(',')
    }
    return { apply, name: "nGramsPreprocessor" } as PreProcessorBase;
};
