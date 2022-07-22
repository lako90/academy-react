import useAxios from '../../hooks/useAxios';

const Albums = () => {
  const { data: albums } = useAxios('albums');

  return (
    <ul>
      {albums.map(({ title, id }) => <li key={id}>{title}</li>)}
    </ul>
  )
}

export default Albums
