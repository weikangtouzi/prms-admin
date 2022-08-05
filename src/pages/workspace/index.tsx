import { useState, useEffect, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import PageLoading from '@/components/PageLoading';
import UserAndData from '@/pages/workspace/components/UserAndData';
import ToDo from '@/pages/workspace/components/Todo';
import UserGrow from '@/pages/workspace/components/UserGrow';

const Workspace =()=>{
	const [data, setData] = useState()
  useEffect(() => {
  	HTAPI.AdminGetHomePageDataCollection().then(response => {
  		setData(response)
  	})
  }, [])

  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <UserAndData data={data} />
        </Suspense>
        <Suspense fallback={null}>
          <ToDo data={data} />
        </Suspense>
        <Suspense fallback={null}>
          <UserGrow data={data} />
        </Suspense>
      </>
    </GridContent>
  )
}

export default Workspace;
