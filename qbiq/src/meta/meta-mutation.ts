import { CreateArgType } from "./zen/createArgs";
import { CreateManyArgType } from "./zen/createManyArgs";
import { DelegateType } from "./zen/delegates";
import { DeleteArgType } from "./zen/deleteArgs";
import { DeleteManyArgType } from "./zen/deleteManyArgs";
import { NTTKey } from "./zen/entities-type";
import { UpdateArgType } from "./zen/updateArgs";
import { UpdateManyArgType } from "./zen/updateManyArgs";
import { UpsertArgType } from "./zen/upsertArgs";

// NB type parameters from input fields not present yet
export interface Mutation<NTT extends NTTKey> {
  create: (ntt: NTT, args: CreateArgType<NTT>) => ReturnType<DelegateType<NTT>['create']>;
  createMany: (
    ntt: NTT,
    args: CreateManyArgType<NTT>
  ) => ReturnType<DelegateType<NTT>['createMany']>;

  update: (ntt: NTT, args: UpdateArgType<NTT>) => ReturnType<DelegateType<NTT>['update']>;
  updateMany: (
    ntt: NTT,
    args: UpdateManyArgType<NTT>
  ) => ReturnType<DelegateType<NTT>['updateMany']>;

  delete: (ntt: NTT, args: DeleteArgType<NTT>) => ReturnType<DelegateType<NTT>['delete']>;
  deleteMany: (
    ntt: NTT,
    args: DeleteManyArgType<NTT>
  ) => ReturnType<DelegateType<NTT>['deleteMany']>;

  upsert: (ntt: NTT, args: UpsertArgType<NTT>) => ReturnType<DelegateType<NTT>['upsert']>;
}
