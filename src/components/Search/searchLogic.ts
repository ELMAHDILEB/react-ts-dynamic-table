import { TypesData } from "../../Types/Types";

const searchLogic = (data: TypesData[], searchTerm: string ) => {
      if(!searchTerm) return data;
      const search = searchTerm.toLowerCase();

      return  data?.filter((item)=>(
        item.name.toLowerCase().includes(search) || 
        item.email.toLowerCase().includes(search) ||
        item.body.toLowerCase().includes(search)
  ))
 
  
}

export default searchLogic;
