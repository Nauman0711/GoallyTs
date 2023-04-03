import { action, makeObservable, observable, runInAction, transaction } from 'mobx';
import { error } from '../../apiHandlers/responseConstant';
import { getRoutineApi } from '../../apiHandlers/apiControllers/getRoutines';

interface Routine {
  _id: string;
  name: string;
  // we can use many more properties as we want
}

class Routines {
  routineList: Routine[] = [];
  loading = false;
  search = '';
  refresh = false;
  totalPages = 0;
  currentPage = 1;
  isAscending = true;

  constructor() {
    makeObservable(this, {
      routineList: observable,
      loading: observable,
      refresh: observable,
      totalPages: observable,
      search: observable,
      currentPage: observable,
      isAscending: observable,
      fetchData: action,
      onMount: action,
      pagination: action,
      removeItem: action,
      toggleSortingOrder: action,
      onRefresh: action,
      onSearch: action,
      setSearch: action,
      resetStates: action,
    });
  }

  async fetchData(): Promise<void> {
    const params = {
      page: this.currentPage,
      search: this.search,
    };
    const response = await getRoutineApi({ params });
    if (response !== error) {
      runInAction(() => {
        this.routineList = this.search
          ? this.routineList
          : [...this.routineList, ...(response.data?.docs || [])];
        this.currentPage = response.data?.page ?? 1;
        this.totalPages = response.data?.totalPages ?? 0;
      });
    }
  }

  setSearch(search: string): void {
    this.search = search;
  }

  async onSearch(): Promise<void> {

    transaction(() => {
      this.refresh = true;
      this.resetStates()
    });
    await this.fetchData();
    runInAction(() => {
      this.refresh = false;
    });
  }

  async pagination(): Promise<void> {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1; // increment currentPage
      await this.fetchData(); // we can do this in another way in which we can pass dependecy array of page into useEffect, But i don't prefer to invoke unnecassary hooks call so that's why i prefer to do in this way.
    }
  }

  async onMount(): Promise<void> {
    runInAction(() => {
      this.loading = true;
    });
    await this.fetchData();
    runInAction(() => {
      this.loading = false;
    });
  }

  async onRefresh(): Promise<void> {
    transaction(() => {
      this.resetStates();
      this.search = '';
      this.refresh = true;
    });
    await this.fetchData();
    runInAction(() => {
      this.refresh = false;
    });
  }

  removeItem(id: string): void {
    this.routineList = this.routineList.filter(item => item._id !== id);
  }

  resetStates(): void {
    this.currentPage = 1;
    this.totalPages = 0;
    this.routineList = [];
  }

  toggleSortingOrder(): void {
    this.isAscending = !this.isAscending;
    const order = this.isAscending ? -1 : 1;
    this.routineList = [...this.routineList.sort((a, b) => {
      const nameA = a.name || '';
      const nameB = b.name || '';
      if (nameA < nameB) {
        return -1 * order;
      }
      if (nameA > nameB) {
        return 1 * order;
      }
      return 0;
    })];
  }
}

export const routineStore = new Routines();