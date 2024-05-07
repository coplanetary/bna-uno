import { OptionalKind, Project, ImportDeclarationStructure } from "ts-morph";

import { Prisma } from '@prisma/client';
import type { BaseDMMF, DMMF } from '@prisma/client/runtime/library';

export function firstCharUpper(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function firstCharLower(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export const ModelNames: string[] = Prisma.dmmf.datamodel.models.map(
  (m: DMMF.Model) => m.name,
);


export function getDMMF(): BaseDMMF {
  return Prisma.dmmf;
}


export function createTypeFile(project: Project, fileName: string, interfaceName: string, typeName: string, properties: { name: string; type: string }[]) {
  const typeFile = project.createSourceFile(`./zen/${fileName}.ts`, '', {
    overwrite: true,
  });

  typeFile.addImportDeclarations(essentialImports);

  typeFile.addInterface({
    name: interfaceName,
    isExported: true,
    properties,
  });

  typeFile.addTypeAlias({
    name: typeName,
    typeParameters: [`T extends NTTKey`],
    type: `${interfaceName}[T]`,
    isExported: true,
  });

  typeFile.saveSync();
}


export const essentialImports: ReadonlyArray<OptionalKind<ImportDeclarationStructure>> = [
  {
    moduleSpecifier: '@prisma/client',
    namedImports: ['Prisma']
  },
  {
    moduleSpecifier: `./entities-type`,
    namedImports: ['NTTKey']
  }
];

export function createProperties(suffix: string) {
  return ModelNames.map((ModelName) => ({
    name: ModelName,
    type: `Prisma.${ModelName}${suffix}`
  }))
}
