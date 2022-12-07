export interface dataAlimentInterface {
    id: string;
    name?: string;
    gramme: number;
    kcal: number | undefined;
    lipide: number | undefined;
    glucide: number;
    fibres: number | undefined;
    proteine: number | undefined;
}
