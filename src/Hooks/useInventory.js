import  { useState } from 'react';
import { useQuery } from 'react-query';

const useInventory = inventoryId => {
    const [service, setService] = useState({});
   
    const { isLoading, error, data,refetch } = useQuery(['repoData'], () =>
    fetch(`http://localhost:5000/inventory/${inventoryId}`).then(res =>
      res.json()
    )
  )
  setService(data)
    return [service,isLoading,error,refetch]
}
export default useInventory;