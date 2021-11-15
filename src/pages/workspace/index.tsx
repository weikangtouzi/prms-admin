import { Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import PageLoading from '@/components/PageLoading';
import UserAndData from '@/pages/workspace/components/UserAndData';
import ToDo from '@/pages/workspace/components/Todo';
import UserGrow from '@/pages/workspace/components/UserGrow';

const Workspace =()=>{
  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <UserAndData/>
        </Suspense>
        <Suspense fallback={null}>
          <ToDo/>
        </Suspense>
        <Suspense fallback={null}>
          <UserGrow/>
        </Suspense>
      </>
    </GridContent>
  )
}

export default Workspace;
