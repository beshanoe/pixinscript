declare class TypeDescription {
    readonly constants: Array<any>;
    readonly eventHandlers: Array<any>;
    readonly hasConstants: boolean;
    readonly hasConstructors: boolean;
    readonly hasEventHandlers: boolean;
    readonly hasMethods: boolean;
    readonly hasProperties: boolean;
    readonly hasStaticMethods: boolean;
    readonly hasStaticProperties: boolean;
    readonly id: string;
    readonly inherits: boolean;
    readonly isCoreObject: boolean;
    readonly isExternalObject: boolean;
    readonly isNull: boolean;
    readonly methods: Array<any>;
    readonly objectsInherited: Array<any>;
    readonly objectsInheriting: Array<any>;
    readonly properties: Array<any>;
    readonly staticMethods: Array<any>;
    readonly staticProperties: Array<any>;
    static readonly coreObjects: Array<any>;
    static readonly externalObjects: Array<any>;
    static readonly objects: Array<any>;

    constructor(id: string);

    inheritedBy(objectId: string): boolean;
    inheritsFrom(objectId: string): boolean;
    static beginObjectDefinition(objectId: string): void;
    static clearAll(): void;
    static defineConstant(formalDescription: string): void;
    static defineConstructor(formalDescription: string): void;
    static defineEventHandler(formalDescription: string): void;
    static defineIncludedFile(formalDescription: string): void;
    static defineMethod(formalDescription: string): void;
    static defineProperty(formalDescription: string, readOnly?: boolean): void;
    static defineStaticMethod(formalDescription: string): void;
    static defineStaticProperty(formalDescription: string, readOnly?: boolean): void;
    static endObjectDefinition(): void;
    static enterDefinitionContext(): void;
    static inherit(objectId: string): void;
    static leaveDefinitionContext(): void;
    static objectDefined(objectId: string): boolean;
}
