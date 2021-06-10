declare var jsonTextEditor: any;
declare var outputTextEditor: any;
declare var outputStorage: string;
declare var compareString: string;
declare var counter: number;
declare function formatJSON(msg: string): string;
declare function insertJSON(msg: string): void;
declare function printOutputCode(): void;
declare function getOutputCode(): Promise<void>;
declare enum SourceType {
    JSON = "JSON",
    MultipleJSON = "Multiple JSON",
    TypeScript = "TypeScript",
    JSONSchema = "JSON Schema",
    Postman = "Postman v2.1"
}
