import React from 'react'

const PageContent = ({children}) => {
  return (
    <section className=' min-h-[calc(100vh-5rem)] py-4 px-6 lg:p-8 xl:p-10 flex flex-col'>
      {children}
    </section>
  )
}

export default PageContent