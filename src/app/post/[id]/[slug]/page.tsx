export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{
    id: number,
    slug: string
  }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  
  const { id, slug } = await params;
  const { page, limit } = await searchParams

  return (
    <>
        <h1>Post Detail: {id}</h1>
        <h2>Slug: {slug}</h2>
        <h3>Page: {page}</h3>
        <h3>Page: {limit}</h3>
    </>
  )
}
