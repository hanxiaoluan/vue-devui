import type { ComponentInternalInstance, Ref } from 'vue';
import { Column, SortMethod, SortDirection } from '../components/column/column-types';

export interface TableStore<T = Record<string, any>> {
  states: {
    _data: Ref<T[]>;
    _columns: Ref<Column[]>;
    flatColumns: Ref<Column[]>;
    _checkList: Ref<boolean[]>;
    _checkAll: Ref<boolean>;
    _halfChecked: Ref<boolean>;
    isFixedLeft: Ref<boolean>;
    thList: ComponentInternalInstance[];
  };
  insertColumn(column: Column, parent: any): void;
  sortColumn(): void;
  removeColumn(column: Column): void;
  updateColumns(): void;
  getCheckedRows(): T[];
  sortData(direction: SortDirection, sortMethod: SortMethod<T>): void;
}
