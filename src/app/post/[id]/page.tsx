export default async function Page({
  params,

}: {
  params: Promise<{
    id: number
  }>
}) {
  
  console.log('Params', params)
  
  const { id } = await params;

  return <h1>Post Detail: {id}</h1>;
}
