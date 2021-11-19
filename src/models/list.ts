import _ from 'lodash';
import { action, computed, makeObservable, observable } from 'mobx';

type CustomClass<T> = new (...args: any[]) => T;
export type Id = string | number;
type Entity<T> = T & { id: Id };
type Iterator<T, U> = (item: T, index: number) => U;

export abstract class List<T extends { id?: Id }> {
   readonly items: Array<T & { id: Id }>;
   readonly Type: CustomClass<T>;
   readonly generateId: boolean;

   static hasDuplicateIds = <X extends { id: Id }>(items: Array<X>): boolean => {
      const group = _.groupBy(items, (item) => item.id);
      return _.some(group, (_items) => _items.length > 1);
   };

   /**
   * List of items
   * @param rawData Data to be modelled as list items
   * @param Type Class name to instantiate items
   * @param generateId Generates ids automatically for items
   */
   protected constructor(
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      rawData: any[] = [],
      Type: CustomClass<T>,
      generateId?: boolean,
   ) {
      this.items = [] as Array<Entity<T>>;
      this.Type = Type;
      this.generateId = !!generateId;

      _.each(rawData, (item: any) => {
         const hasId = !!item.id;

         if (!hasId && !generateId) {
            throw new Error('All the list items must have an unique id');
         }

         const newItem = new Type(item) as Entity<T>;

         if (!hasId) {
            _.set(newItem, 'id', _.uniqueId('list_item_'));
         }

         this.addItem(newItem);
      });

      if (List.hasDuplicateIds(this.items)) {
         throw new Error('List contains duplicate items');
      }
      makeObservable<List<T>, any>(this, {
         items: observable,
         size: computed,
         addItem: action,
         addItems: action,
         updateItem: action,
         removeItem: action,
         clear: action,
         replace: action,
         merge: action,
         reverse: action,
      });
   }

   get size(): number {
      return this.items.length;
   }

   addItem(item: Entity<T> | T): List<T> {
      if (!item.id && this.generateId) {
         _.set(item, 'id', _.uniqueId('list_item_'));
      }

      if (this.getItemById(item.id ?? '')) {
         this.updateItem(item as Entity<T>);
      } else {
         this.items.push(item as Entity<T>);
      }

      return this;
   }

   addItems(items: Array<Entity<T>>): List<T> {
      _.each(items, (item) => this.addItem(item));
      return this;
   }

   updateItem(updatedItem: Entity<T>): List<T> {
      if (updatedItem && this.hasItems()) {
         const hasItem = this.getItemById(updatedItem.id);

         if (hasItem) {
            const index = _.findIndex(
               this.items,
               (item) => item.id === updatedItem.id,
            );
            this.items[index] = updatedItem;
         }
      }

      return this;
   }

   removeItem(id: Id): List<T> {
      const deleteIndex = _.findIndex(this.items, (item) => item.id === id);

      if (deleteIndex >= 0) {
         this.items.splice(deleteIndex, 1);
      }

      return this;
   }

   clear(): List<T> {
      while (this.hasItems()) {
         this.items.pop();
      }

      return this;
   }

   replace(items: Array<Entity<T>>): List<T> {
      this.clear().addItems(items);
      return this;
   }

   merge(list: List<T>): List<T> {
      this.addItems(list.items);
      return this;
   }

   hasItems(): boolean {
      return this.size > 0;
   }

   isEmpty(): boolean {
      return !this.hasItems();
   }

   getIds(): Id[] {
      return _.map(this.items, (item) => item.id);
   }

   getItemById(id: Id): T | undefined {
      return _.find(this.items, (item) => item.id === id);
   }

   getItemByIndex(index: number): T | undefined {
      return index < this.size ? this.items[index] : undefined;
   }

   first(): T | undefined {
      return _.first(this.items);
   }

   last(): T | undefined {
      return _.last(this.items);
   }

   find(iterator: (item: T) => boolean): T | undefined {
      return _.find(this.items, iterator);
   }

   findIndex(iterator: (item: T) => boolean): number {
      return _.findIndex(this.items, iterator);
   }

   getFilteredList<X extends List<T>>(
      iterator: (item: T) => boolean,
      list: X,
   ): X {
      list.addItems(_.filter(this.items, iterator));
      return list;
   }

   getIndex(id: Id): number {
      return _.findIndex(this.items, (item) => item.id === id);
   }

   reverse(): List<T> {
      this.items.reverse();
      return this;
   }

   map<U>(iterator: Iterator<T, U>): U[] {
      return _.map(this.items, iterator);
   }

   forEach<U>(iterator: Iterator<T, U>) {
      return _.forEach(this.items, iterator);
   }
}
