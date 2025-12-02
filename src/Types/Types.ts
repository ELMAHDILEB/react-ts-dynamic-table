export type TypesData = {
    id: number,
    name: string,
    email: string,
    body: string,
}

export type ButtonProps ={
    page: number,
    setPage: (page: number)=> void,
    hasNext: boolean,
    hasPrev:boolean,
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
