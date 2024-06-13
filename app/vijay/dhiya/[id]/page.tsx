export default function Page({ params }: { params: { id: string } }) {
    console.log(params.id)
    return <h1>My Page {params.id}</h1>
  }
