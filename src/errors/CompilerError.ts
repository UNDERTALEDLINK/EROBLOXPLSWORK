import * as ts from "ts-morph";

export enum CompilerErrorType {
	NoAny,
	ReservedKeyword,
	ReservedMethodName,
	SpreadDestructuring,
	ParameterChildMissing,
	NoLabeledStatement,
	BadStatement,
	MissingModuleFile,
	BadSpecifier,
	BadAncestor,
	UnexpectedBindingPattern,
	UnexpectedInitializer,
	ForEmptyVarName,
	NoVarKeyword,
	UndefinableMetamethod,
	NoConstructorReturn,
	NoThisOutsideClass,
	NoNull,
	BadExpression,
	BadFunctionBody,
	ExpectedPropertyAccessExpression,
	NoEqualsEquals,
	NoExclamationEquals,
	BadBinaryExpression,
	BadPrefixUnaryExpression,
	BadPostfixUnaryExpression,
	InvalidClientOnlyAPIAccess,
	InvalidServerOnlyAPIAccess,
	NoFunctionIndex,
	NoClassPrototype,
	ExportInNonModuleScript,
	RoactGettersNotAllowed,
	RoactSettersNotAllowed,
	RoactSubClassesNotSupported,
	RoactJsxTextNotSupported,
	RoactNoNewComponentAllowed,
	RoactJsxWithoutImport,
	RoactNoReservedMethods,
	RoactInvalidSymbol,
	RoactInvalidPrimitive,
	RoactInvalidExpression,
	RoactInvalidCallExpression,
	RoactInvalidIdentifierExpression,
	RoactInvalidPropertyExpression,
	UnexpectedObjectIndex,
	NoDynamicImport,
	InvalidIdentifier,
	RobloxTSReservedIdentifier,
	BadContext,
	MixedMethodCall,
	InvalidService,
	ReservedNamespace,
	BadAddition,
	InvalidMacroIndex,
	NoTypeOf,
	BadBuiltinConstructorCall,
	BadForOfInitializer,
	ForInLoop,
	BadDestructuringType,
	NullableIndexOnMapOrSet,
	BadSpreadType,
	YieldNotInExpressionStatement,
	NonStringThrow,
	TryReturn,
	BadSwitchDefaultPosition,
	BadEnum,
	BadLuaTupleStatement,
	UnexpectedPropType,
	GlobalThis,
	StaticNew,
	BadRojo,
	BadPackageScope,
	LuaTupleInConditional,
	InvalidComputedIndex,
	TupleLength,
	BadMethodCall,
	BadClassExtends,
}

export class CompilerError extends Error {
	constructor(
		message: string,
		public readonly node: ts.Node,
		public readonly type: CompilerErrorType,
		shouldNotHappen = false,
	) {
		super(
			message +
				(shouldNotHappen ? "\nPlease submit an issue at https://github.com/roblox-ts/roblox-ts/issues" : ""),
		);
	}
}
