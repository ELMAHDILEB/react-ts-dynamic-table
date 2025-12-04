export type TypesData = {
    id: number,
    name: string,
    email: string,
    body: string,
}

export interface CommentsResponse {
    data: TypesData[];
    totalPages: number;
  }

export type ButtonProps ={
    page: number,
    setPage: (page: number)=> void,
    limit: number,
    hasNext: boolean,
    hasPrev:boolean,
    setSearchParams: (value: Record<string, string>)=> void,
    setValueLimit:(value: number)=>void,
    totalPages: number
}

export interface TableHeaderInetface {
    allSelected: boolean,
    onSelectedAll: ()=>void;
}
export interface TableRowInetface {
    item: TypesData,
    selectedOne: number[],
    onSelectedOne: (id: number)=>void;
}

export type searchTermProps ={
    setSearchTerm: (search: string)=>void;
}

export type paginateTypes = {
    page:number, 
    limit:number,
    search:string,
}


export type dataShowingType ={
    valueLimit: number,
    onSetValueLimit:(value: number)=>void
}
