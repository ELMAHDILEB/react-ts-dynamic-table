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
    value: string,
}

export type paginateTypes = {
    page:number, 
    limit:number,
    search:string,
}

