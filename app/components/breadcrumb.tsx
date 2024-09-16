import Link from 'next/link';

export default function Breadcrumb({ pokemonName }:any) {
  return (
    <div className="mb-4">
      <Link className='font-bold' href="/">Home</Link> &gt; {pokemonName}
    </div>
  );
}
